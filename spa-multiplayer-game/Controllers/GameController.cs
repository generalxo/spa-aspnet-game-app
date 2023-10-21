using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using spa_multiplayer_game.Helpers;
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
            GameHelper gameHelper = new();
            string correctWord = "WATER"; // TODO: Get this from the database

            userGuess = gameHelper.CheckWord(userGuess, correctWord);
            string guessedWord = gameHelper.JoinWord(userGuess);

            if (guessedWord == correctWord)
            {
                userGuess.IsWordFound = true;
                userGuess.IsGameOver = true;
            }
            if (userGuess.CurrentAttemptRow + 1 == 5 && userGuess.IsWordFound == false)
            {
                userGuess.IsGameOver = true;
            }

            return userGuess;
        }
    }
}