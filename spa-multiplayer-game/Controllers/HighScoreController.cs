using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using spa_multiplayer_game.Data;
using spa_multiplayer_game.Helpers;
using spa_multiplayer_game.Models.ViewModels;

namespace spa_multiplayer_game.Controllers
{
    [Route("api/highscore")]
    [ApiController]
    public class HighScoreController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly HighScoreHelper _highScoreHelper;

        public HighScoreController(ApplicationDbContext context)
        {
            _context = context;
            _highScoreHelper = new HighScoreHelper(context);
        }

        [HttpGet]
        public IActionResult GetHighScores()
        {
            try
            {
                IEnumerable<HighScoreViewModel> alltime = _highScoreHelper.FetchAlltimeHighScore();
                IEnumerable<HighScoreViewModel> daily = _highScoreHelper.FetchDailyHighScore();
                var highScores = new
                {
                    Alltime = alltime,
                    Daily = daily
                };
                return Ok(highScores);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
