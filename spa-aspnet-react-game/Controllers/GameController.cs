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
            WordViewModel word = new WordViewModel();
            word.Word = "WATER";
            return word;
        }

    }
}
