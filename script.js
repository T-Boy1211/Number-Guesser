var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var userGuess = parseInt(document.getElementById('guessInput').value);
  var result = document.getElementById('result');
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.innerHTML = 'Please enter a valid number between 1 and 100.';
  } else if (userGuess < randomNumber) {
    result.innerHTML = 'Too low! Try again.';
  } else if (userGuess > randomNumber) {
    result.innerHTML = 'Too high! Try again.';
  } else {
    result.innerHTML = `Correct! You guessed it in ${attempts} attempts.`;
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('result').innerHTML = 'Result';
}
