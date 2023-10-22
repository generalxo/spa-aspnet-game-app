using Microsoft.AspNetCore.Identity;

namespace spa_multiplayer_game.Models
{
    public class ApplicationUser : IdentityUser
    {
        // Properties
        public string? Nickname { get; set; }

        // Navigation properties
        public IEnumerable<GameModel> GameModels { get; set; }
    }
}