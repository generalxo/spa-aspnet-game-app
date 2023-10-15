using Microsoft.AspNetCore.Identity;

namespace spa_aspnet_react_game.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? Nickname { get; set; }

        //Navigation Property
        public IEnumerable<GameModel>? Games { get; set; }
    }
}