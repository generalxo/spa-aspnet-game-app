using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace spa_multiplayer_game.Models
{
    public class GameModel
    {
        // Primary key
        [Key]
        public int Id { get; set; }
        // Properties
        [NotNull]
        public string? PublicId { get; set; }
        [NotNull]
        public string? CorrectWord { get; set; }

        public string? BoardState { get; set; }

        public bool IsGameOver { get; set; } = false;
        public bool IsWordFound { get; set; } = false;
        public int Score { get; set; } = 0;
        public DateTime CreatedAt { get; set; }
        public DateTime CompletedAt { get; set; }

        //Foregin key
        [ForeignKey("User")]
        public string UserId{ get; set; }

        // Navigation properties
        public virtual ApplicationUser User { get; set; }
    }
}