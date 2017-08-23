var youWin = 0;
var youLose = 0;
var guessesLeft = 7;
var guessedLetters = [];
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];

document.onkeyup = function(event) {

  var userGuess = event.key;
  guessedLetters.push(userGuess);

  if (userGuess === computerLetter) {
    youWin++;
    guessesLeft = 7;
    guessedLetters = [];
    computerletter = letterChoices[Math.floor(Math.random() * letterChoices.length)]

  } else {
    guessesLeft--;

  }
  if (guessesLeft === 0) {
    youLose++;
    guessesLeft = 7;
    guessedLetters = [];
    computerLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
  }

  var html = '<h1>The Psychic Game</h1>' +
    '<h3>Guess What Letter I Am Thinking...</h3>' +
    '<p>Wins: ' + youWin + '</p>' +
    '<p>Losses: ' + youLose +
    '<p>Guesses Left: ' + guessesLeft +
    '<p>Letters Guessed: ' + guessedLetters + '</p>';

  document.querySelector('.gamedata').innerHTML = html;
}