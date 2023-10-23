using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPost("checkword")]
        [Authorize]
        public GuessViewModel Guess([FromBody] GuessViewModel userGuess)
        {
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            GameModel? gameModel = _context.GameModel.FirstOrDefault(x => x.UserId == userId && x.IsGameOver == false && x.IsWordFound == false);
            
            string correctWord = gameModel.CorrectWord;

            userGuess = _gameHelper.CheckWord(userGuess, correctWord);
            string guessedWord = _gameHelper.JoinWord(userGuess);

            //Console.WriteLine(gameHelper.GetWordleWordFromJson());

            if (guessedWord == correctWord)
            {
                userGuess.IsWordFound = true;
                userGuess.IsGameOver = true;

                gameModel.IsWordFound = true;
                gameModel.IsGameOver = true;

            }
            if (userGuess.CurrentAttemptRow + 1 == 5 && userGuess.IsWordFound == false)
            {
                userGuess.IsGameOver = true;

                gameModel.IsGameOver = true;
            }

            gameModel.Attempts = JsonConvert.SerializeObject(userGuess.Guesses);

            _context.Update(gameModel);
            _context.SaveChanges();

            return userGuess;
        }

        [HttpPost("newgame")]
        [Authorize]
        public NewGameViewModel NewGame()
        {
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            
            var gameId = Guid.NewGuid().ToString();
            var wordleWord = _gameHelper.GetWordleWordFromJson();
            GameModel gameModel = new()
            {
                PublicId = gameId,
                CorrectWord = wordleWord,
                UserId = userId
            };
            GuessViewModel guessViewModel = new()
            {
                Guesses = new GuessModel[6][]
            };
            for (int i = 0; i < 6; i++)
            {
                guessViewModel.Guesses[i] = new GuessModel[5];
                for (int j = 0; j < 5; j++)
                {
                    guessViewModel.Guesses[i][j] = new GuessModel();
                }
            }

            string AttemptsJson = JsonConvert.SerializeObject(guessViewModel.Guesses);

            gameModel.Attempts = AttemptsJson;

            _context.GameModel.Add(gameModel);
            //_context.SaveChanges();

            NewGameViewModel newGame = new()
            {
                GameId = gameId
            };

            return newGame;
        }

        [HttpGet("getgame")]
        [Authorize]
        public GuessViewModel GetGame([FromBody] NewGameViewModel newGame)
        {
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            GameModel? gameModel = _context.GameModel.FirstOrDefault(x => x.PublicId == newGame.GameId && x.UserId == userId);
            GuessViewModel? guessViewModel = new();

            if (gameModel is not null)
            {
                guessViewModel.Guesses = JsonConvert.DeserializeObject<GuessModel[][]>(gameModel.Attempts);
                for(int i = 0; i < guessViewModel.Guesses.Length; i++)
                {
                    if (guessViewModel.Guesses[i][0].Letter == "")
                    {
                        guessViewModel.CurrentAttemptRow = i;
                    }
                }
            }

            return guessViewModel;
        }
    }
}