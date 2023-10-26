namespace spa_multiplayer_game.Models.ViewModels
{
    public class FetchActiveGameViewModel
    {
        public string? ActiveGameStatus { get; set; }
        public GuessModel[][]? Guesses { get; set; }
        public int CurrentAttemptRow { get; set; }
    }
}
