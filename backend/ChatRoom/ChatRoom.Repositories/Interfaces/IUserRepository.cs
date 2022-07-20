using ChatRoom.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatRoom.Repositories.Interfaces
{
    public interface IUserRepository
    {
        User AddUser(User user);

        User RemoveUser(string id);

        List<User> GetUsers();

        User GetUser(string id);
    }
}
