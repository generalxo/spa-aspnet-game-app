using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace spa_multiplayer_game.Models
{
    public class HighScoreModel
    {
        // Primary Key
        [Key]
        public int Id { get; set; }
        // Properties
        public int Score { get; set; }
        public double TimeToComplete { get; set; }
        public DateTime Date { get; set; }

        // Foregin key
        [ForeignKey("User")]
        public string UserId { get; set; }

        // Navigation properties
        public virtual ApplicationUser User { get; set; }
    }
}
