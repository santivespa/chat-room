using ChatRoom.Model;
using ChatRoom.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatRoom.Repositories.Helpers;
namespace ChatRoom.Repositories.Repositories
{
    public class UserRepository : IUserRepository
    {
        private static List<User> Users { get; set; } = new List<User>();

        public User AddUser(User user)
        {
            if( String.IsNullOrEmpty(user.UserName) || user.UserName.Length > 20)
            {
                return null;
            }

            if (!Users.Contains(user) && Users.FirstOrDefault(x=>x.UserName == user.UserName) == null)
            {
                user.Color = ColorsHelper.GetAnyColor(Users);
                Users.Add(user);
                return user;
            }
            return null;
        }

        public User RemoveUser(string id)
        {
            var user = Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return null;
            }
            Users.Remove(user);
            return user;
        }

        public List<User> GetUsers()
        {
            return Users;
        }

        public User GetUser(string id)
        {
            return Users.FirstOrDefault(x => x.Id == id);
        }
    }
}
