using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using spa_multiplayer_game.Models.ViewModels;

namespace spa_multiplayer_game.Controllers
{
    [Route("api/game")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpPost("checkword")]
        public GuessViewModel Guess([FromBody] GuessViewModel userGuess)
        {
            string correctWord = "WATER";
            string userWord = "";

            for (int i = 0; i < userGuess.Guesses[userGuess.CurrentAttemptRow].Length; i++)
            {
                if (userGuess.Guesses[userGuess.CurrentAttemptRow][i].Letter == correctWord[i].ToString())
                {
                    userGuess.Guesses[userGuess.CurrentAttemptRow][i].LetterState = "correct";
                }
                else if (correctWord.Contains(userGuess.Guesses[userGuess.CurrentAttemptRow][i].Letter))
                {
                    userGuess.Guesses[userGuess.CurrentAttemptRow][i].LetterState = "almost";
                }
                else
                {
                    userGuess.Guesses[userGuess.CurrentAttemptRow][i].LetterState = "wrong";
                }
            }

            userWord = string.Join("", userGuess.Guesses[userGuess.CurrentAttemptRow].Select(x => x.Letter));
            Console.WriteLine(userWord);
            if (userWord == correctWord)
            {
                userGuess.IsGameOver = true;
            }

            return userGuess;
        }
    }
}