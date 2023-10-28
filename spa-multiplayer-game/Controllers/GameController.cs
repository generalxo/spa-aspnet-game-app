using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using spa_multiplayer_game.Data;
using spa_multiplayer_game.Helpers;
using spa_multiplayer_game.Models;
using spa_multiplayer_game.Models.ViewModels;
using System.Security.Claims;

namespace spa_multiplayer_game.Controllers
{
    [Route("api/game")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly GameHelper _gameHelper;

        public GameController(ApplicationDbContext context)
        {
            _context = context;
            _gameHelper = new GameHelper();
        }

        // To Do 
        // Add Score when game is over
        [HttpPost("checkword")]
        [Authorize]
        public async Task<IActionResult> CheckWord([FromBody] GuessViewModel userGuess)
        {
            try
            {
                string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("Invalid user ID");
                }

                GameModel? gameModel = await _context.GameModel.FirstOrDefaultAsync(x => x.UserId == userId && x.IsGameOver == false && x.IsWordFound == false);

                userGuess = _gameHelper.CheckWord(userGuess, gameModel.CorrectWord);
                string guessedWord = _gameHelper.JoinWord(userGuess);


                if (guessedWord == gameModel.CorrectWord)
                {
                    userGuess.IsWordFound = true;
                    userGuess.IsGameOver = true;

                    gameModel.IsWordFound = true;
                    gameModel.IsGameOver = true;

                    gameModel.Score = _gameHelper.SetScore(gameModel, userGuess);

                }
                if (userGuess.CurrentAttemptRow + 1 == 5 && userGuess.IsWordFound == false)
                {
                    userGuess.IsGameOver = true;
                    gameModel.IsGameOver = true;
                    // no score
                }

                gameModel.Attempts = JsonConvert.SerializeObject(userGuess.Guesses);

                _context.Update(gameModel);
                await _context.SaveChangesAsync();

                return Ok(userGuess);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error(500)");
            }
        }



        /* Order of operations:
         * Since we dont want to create new game when there is an active game, we first check for an active game.
         * if an active game is found -> api will return OK with a ViewModel with game data in the body
         * if there is no active game -> api will retutn a 404 status code -> client will send a new request to create a new game
         */

        [HttpPost("fetchactivegame")]
        [Authorize]
        public async Task<IActionResult> FetchActiveGame()
        {
            try
            {
                string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                GameModel? game = await _context.GameModel.FirstOrDefaultAsync(x => x.UserId == userId && x.IsGameOver == false);

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }

                if (game is null)
                {
                    return NotFound("No active game found");
                }

                FetchActiveGameViewModel fetchActiveGameViewModel = _gameHelper.GameModelToFetchActiveGameViewModel(game);
                return Ok(fetchActiveGameViewModel);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error(500)");
            }
        }

        [HttpPost("newgame")]
        [Authorize]
        public async Task<IActionResult> NewGame()
        {
            // Add a check for if there is an active game
            try
            {
                string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return BadRequest("Invalid user ID");
                }

                GameModel? game = await _context.GameModel.FirstOrDefaultAsync(x => x.UserId == userId && x.IsGameOver == false);
                if (game is not null)
                {
                    return BadRequest("Active game found!");
                }

                GameModel newGame = _gameHelper.CreateNewGame(userId);

                await _context.GameModel.AddAsync(newGame);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error(500)");
            }
        }


    }
}