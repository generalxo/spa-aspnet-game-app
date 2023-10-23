using Newtonsoft.Json;
using spa_multiplayer_game.Models.ViewModels;

namespace spa_multiplayer_game.Helpers
{
    public class GameHelper
    {
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
            string wordleWord;
            string json = File.ReadAllText("Data/WordleWords-200.json");
            if (!string.IsNullOrEmpty(json))
            {
                WordListModel? wordList = JsonConvert.DeserializeObject<WordListModel>(json);
                List<string> words = wordList.Words;
                wordleWord = words[random.Next(0, words.Count)];
                //Console.WriteLine(wordleWord);
                return wordleWord.ToUpper();
            }
            else
            {
                throw new Exception("Error getting data from file");
            }

        }
    }
}
