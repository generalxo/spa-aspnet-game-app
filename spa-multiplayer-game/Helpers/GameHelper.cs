using spa_multiplayer_game.Models.ViewModels;

namespace spa_multiplayer_game.Helpers
{
    public class GameHelper
    {
        public GuessViewModel CheckWord(GuessViewModel guessModel, string correctWord)
        {
            for (int i = 0; i < guessModel.Guesses[guessModel.CurrentAttemptRow].Length; i++)
            {
                if (guessModel.Guesses[guessModel.CurrentAttemptRow][i].Letter == correctWord[i].ToString())
                {
                    guessModel.Guesses[guessModel.CurrentAttemptRow][i].LetterState = "correct";
                }
                else if (correctWord.Contains(guessModel.Guesses[guessModel.CurrentAttemptRow][i].Letter))
                {
                    guessModel.Guesses[guessModel.CurrentAttemptRow][i].LetterState = "almost";
                }
                else
                {
                    guessModel.Guesses[guessModel.CurrentAttemptRow][i].LetterState = "wrong";
                }
            }
            return guessModel;
        }

        public string JoinWord(GuessViewModel guessModel)
        {
            return string.Join("", guessModel.Guesses[guessModel.CurrentAttemptRow].Select(x => x.Letter));
        }
    }
}
