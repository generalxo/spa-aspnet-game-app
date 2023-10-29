namespace spa_multiplayer_game.Models.ViewModels
{
    public class GuessViewModel
    {
        public BoardViewModel[][]? Guesses { get; set; }
        public int CurrentAttemptRow { get; set; } = 0;
        public bool IsGameOver { get; set; } = false;
        public bool IsWordFound { get; set; } = false;
    }
}
