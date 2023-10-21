using Microsoft.AspNetCore.Identity;

namespace spa_multiplayer_game.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? Nickname { get; set; }
    }
}