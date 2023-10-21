using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace spa_multiplayer_game.Models
{
    public class GameModel
    {
        [Key]
        public int Id { get; set; }
        [NotNull]
        public string? PublicId { get; set; }
        [NotNull]
        public string? CorrectWord { get; set; }

        public string? Attempt1 { get; set; } = string.Empty;
        public string? Attempt2 { get; set; } = string.Empty;
        public string? Attempt3 { get; set; } = string.Empty;
        public string? Attempt4 { get; set; } = string.Empty;
        public string? Attempt5 { get; set; } = string.Empty;
        public string? Attempt6 { get; set; } = string.Empty;

        public bool IsGameOver { get; set; } = false;
        public bool IsWordFound { get; set; } = false;
        public int Score { get; set; } = 0;
    }
}