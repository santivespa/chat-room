using ChatRoom.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatRoom.Repositories.Helpers
{


    internal class ColorsHelper
    {
        private static List<string> Colors = new List<string>()
        {

            "#47C5C9",
            "#4DD25F",
            "#6E44FF",
            "#5BABFC",
            "#5772FF",
            "#FF6B6B",
            "#FFC200",
            "#FF9F46",
        };

        public static string GetAnyColor(List<User> users)
        {
            var freeColors = GetFreeColors(users);
            if (freeColors.Any())
            {
                return GetRandomColor(freeColors);
            }
            else
            {
                return GetRandomColor(Colors);
            }
        }
        public static List<string> GetFreeColors(List<User> users)
        {
            var freeColors = new List<string>();
            Colors.ForEach(x =>
            {
                if(!users.Any(u=>u.Color == x))
                {
                    freeColors.Add(x);
                }
            });
            return freeColors;
        }

        public static string GetRandomColor(List<string> colors)
        {
            var rand = new Random();
            return colors[rand.Next(colors.Count)];
         
        }
    }
}
