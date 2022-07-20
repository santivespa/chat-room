namespace ChatRoom.Model
{
    public class User
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Color { get; set; }

        public override bool Equals(object? obj)
        {
            var user = obj as User;

            return user != null && user.Id == Id;
        }
    }
}