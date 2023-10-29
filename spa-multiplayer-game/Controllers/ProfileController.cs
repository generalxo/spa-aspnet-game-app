using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using spa_multiplayer_game.Data;
using System.Security.Claims;

namespace spa_multiplayer_game.Controllers
{
    [Route("api/profile")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProfileController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetProfile()
        {
            try
            {
                string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("Invalid user ID");
                }

                var profile = new
                {
                    Nickname = _context.Users.Find(userId).Nickname,
                    TotalGames = _context.GameModel.Where(x => x.UserId == userId).Count(),
                    AverageScore = _context.GameModel.Where(x => x.UserId == userId).Average(x => x.Score),
                    AverageTime = _context.HighScoreModel.Where(x => x.UserId == userId).Average(x => x.TimeToComplete)
                };

                return Ok(profile);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
