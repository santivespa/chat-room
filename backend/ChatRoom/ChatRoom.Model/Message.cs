using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatRoom.Model
{
    public class Message
    {

        public string Id { get; set; }

        public string Value { get; set; }
        public DateTime Date { get; set; }
        public User User { get; set; }

        public Message(string Value)
        {
            this.Id = Guid.NewGuid().ToString();
            this.Value = Value;
            this.Date = DateTime.Now;
        }
    }
}
