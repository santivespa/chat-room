using ChatRoom.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatRoom.Repositories.Interfaces
{
    public interface IMessageRepository
    {
        Message AddMessage(Message message, string userId);
    }
}
