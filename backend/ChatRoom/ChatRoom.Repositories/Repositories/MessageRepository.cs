using ChatRoom.Model;
using ChatRoom.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatRoom.Repositories.Repositories
{
    public class MessageRepository : IMessageRepository
    {
        private static List<Message> Messages { get; set; } = new List<Message>();

        private readonly IUserRepository _userRepository;

        public MessageRepository(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }




        public Message AddMessage(Message message, string userId)
        {
            var user = _userRepository.GetUser(userId);
            if(user == null)
            {
                return null;
            }
            if (String.IsNullOrEmpty(message.Value) || user.UserName.Length > 400)
            {
                return null;
            }
            message.User = user;
            Messages.Add(message);
            return message;
        }
    }
}
