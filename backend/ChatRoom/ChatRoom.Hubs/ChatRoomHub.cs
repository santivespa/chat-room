using ChatRoom.Model;
using ChatRoom.Repositories.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatRoom.Hubs
{
    public class ChatRoomHub : Hub
    {
        private readonly IUserRepository _userRepository;
        private readonly IMessageRepository _messageRepository;


        public ChatRoomHub(IUserRepository userRepository, IMessageRepository messageRepository)
        {
            _userRepository = userRepository;
            _messageRepository = messageRepository;
        }

        public override async Task<Task> OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("displayUsers", _userRepository.GetUsers());
            return base.OnConnectedAsync();
        }

        public async Task Connect(string userName)
        {
            var userResult = _userRepository.AddUser(new User
            {
                Id = Context.ConnectionId,
                UserName = userName
            });
            await Clients.Caller.SendAsync("login", userResult);
            await Clients.All.SendAsync("userConnected", userResult);
        }

        public async Task SendMessage(string value)
        {
            var messageResult = _messageRepository.AddMessage(new Message(value), Context.ConnectionId);
            if (messageResult != null)
            {
                await Clients.All.SendAsync("newMessage", messageResult);
            }
        }


        public async Task Disconnect()
        {
            var userResult = _userRepository.RemoveUser(Context.ConnectionId);
            await Clients.Caller.SendAsync("logout", userResult);
            await Clients.All.SendAsync("userDisconnected", userResult);
        }

        public override async Task<Task> OnDisconnectedAsync(Exception? exception)
        {
            var userResult = _userRepository.RemoveUser(Context.ConnectionId);
            await Clients.Others.SendAsync("userDisconnected", userResult);

            return base.OnDisconnectedAsync(exception);
        }


    }
}
