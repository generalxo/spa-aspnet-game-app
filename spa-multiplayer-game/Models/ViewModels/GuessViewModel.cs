﻿namespace spa_multiplayer_game.Models.ViewModels
{
    public class GuessViewModel
    {
        public GuessModel[][]? Guesses { get; set; }
        public int CurrentAttemptRow { get; set; }
        public bool IsGameOver { get; set; } = false;
        public bool IsWordFound { get; set; } = false;
    }
}