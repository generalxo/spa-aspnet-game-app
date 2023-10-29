using spa_multiplayer_game.Data;
using spa_multiplayer_game.Models;
using spa_multiplayer_game.Models.ViewModels;

namespace spa_multiplayer_game.Helpers
{
    public class HighScoreHelper
    {
        private readonly ApplicationDbContext _context;
        public HighScoreHelper(ApplicationDbContext context)
        {
            _context = context;
        }
        public HighScoreModel CreateNewHighScore(GameModel game)
        {
            TimeSpan timeSpan = game.CompletedAt - game.CreatedAt;

            HighScoreModel highScore = new HighScoreModel
            {
                Score = game.Score,
                TimeToComplete = timeSpan.TotalSeconds,
                UserId = game.UserId,
                Date = DateTime.Now
            };

            return highScore;
        }

        public IEnumerable<HighScoreViewModel> FetchDailyHighScore()
        {
            List<HighScoreModel> highScores = _context.HighScoreModel
                .Where(x => x.Date.Date == DateTime.Now.Date)
                .OrderByDescending(x => x.Score)
                .ThenBy(x => x.TimeToComplete)
                .Take(10)
                .ToList();

            return ModelConverter(highScores);
        }

        public IEnumerable<HighScoreViewModel> FetchAlltimeHighScore()
        {
            List<HighScoreModel> highScores = _context.HighScoreModel
                .OrderByDescending(x => x.Score)
                .ThenBy(x => x.TimeToComplete)
                .Take(10)
                .ToList();

            return ModelConverter(highScores);
        } 

        public IEnumerable<HighScoreViewModel> ModelConverter(IEnumerable<HighScoreModel> highScores) { 

            List<HighScoreViewModel> viewModels = highScores.Select(x => new HighScoreViewModel
            {
                Score = x.Score,
                TimeToComplete = x.TimeToComplete,
                Date = x.Date
            }).ToList();

            return viewModels;
        }

    }
}
