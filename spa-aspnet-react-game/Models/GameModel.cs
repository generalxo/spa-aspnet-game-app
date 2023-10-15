using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace spa_aspnet_react_game.Models
{
    public class GameModel
    {
        //Primary Key
        [Key]
        public int GameId { get; set; }
        //Entitys
        public string? word { get; set; }
        public int Attempt { get; set; } = 0;
        public bool FoundWord { get; set; } = false;

        //Foreign Key
        [NotNull]
        [ForeignKey("ApplicationUser")]
        public string? UserId { get; set; }

        //Navigation Property
        public ApplicationUser? AspNetUsers { get; set; }

    }
}
