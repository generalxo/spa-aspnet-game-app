using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using spa_aspnet_react_game.Models.ViewModels;

namespace spa_aspnet_react_game.Controllers
{
    [Route("api/game")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpPost("newgame")]
        public WordViewModel NewGame()
        {
            //We want to get a user here and then create a new game for that user in the database and then return a word

            WordViewModel word = new()
            {
                Word = "WATER"
            };
            return word;
        }
    }
}
