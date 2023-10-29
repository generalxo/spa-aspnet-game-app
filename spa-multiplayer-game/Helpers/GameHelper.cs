using Newtonsoft.Json;
using spa_multiplayer_game.Models;
using spa_multiplayer_game.Models.ViewModels;

namespace spa_multiplayer_game.Helpers
{
    public class GameHelper
    {
        public int SetScore(GameModel game, GuessViewModel guess)
        {
            switch (guess.CurrentAttemptRow)
            {
                case 0:
                    game.Score = 10;
                    break;
                case 1:
                    game.Score = 7;
                    break;
                case 2:
                    game.Score = 5;
                    break;
                case 3:
                    game.Score = 3;
                    break;
                case 4:
                    game.Score = 1;
                    break;
                case 5:
                    game.Score = 0;
                    break;
            }
            return game.Score;
        }
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

        public string GetWordleWordFromJson()
        {
            Random random = new();
            string json = File.ReadAllText("Data/WordleWords-200.json");

            if (!string.IsNullOrEmpty(json))
            {
                WordListModel? wordList = JsonConvert.DeserializeObject<WordListModel>(json);
                List<string> words = wordList.Words;
                string wordleWord = words[random.Next(0, words.Count)];
                return wordleWord.ToUpper();
            }
            else
            {
                throw new Exception("Error getting data from file");
            }
        }

        public FetchActiveGameViewModel GameModelToFetchActiveGameViewModel(GameModel gameModel)
        {
            FetchActiveGameViewModel fetchActiveGameViewModel = new()
            {
                ActiveGameStatus = "found active game",
                Guesses = JsonConvert.DeserializeObject<BoardViewModel[][]>(gameModel.BoardState)
            };
            //Gettíng current attempt row
            for (int i = 0; i < fetchActiveGameViewModel.Guesses.Length; i++)
            {
                if (string.IsNullOrEmpty(fetchActiveGameViewModel.Guesses[i][0].Letter))
                {
                    fetchActiveGameViewModel.CurrentAttemptRow = i;
                    return fetchActiveGameViewModel;
                }
            }
            //If we got here something went wrong.
            throw new Exception("Error getting current attempt row");
        }

        public GameModel CreateNewGame(string userId)
        {
            //Creating game board
            BoardViewModel[][] gameBoard = new BoardViewModel[6][];
            for (int i = 0; i < gameBoard.Length; i++)
            {
                gameBoard[i] = new BoardViewModel[5];
                for (int j = 0; j < gameBoard[i].Length; j++)
                {
                    gameBoard[i][j] = new BoardViewModel();
                }
            }

            GameModel newGame = new()
            {
                PublicId = Guid.NewGuid().ToString(),
                CorrectWord = GetWordleWordFromJson(),
                UserId = userId,
                BoardState = JsonConvert.SerializeObject(gameBoard),
                IsGameOver = false,
                IsWordFound = false,
                CreatedAt = DateTime.Now
            };

            return newGame;
        }
    }
}
