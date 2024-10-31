let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.innerHTML = 'Please enter a valid number between 1 and 100.';
  } else if (userGuess < randomNumber) {
    feedback.innerHTML = 'Too low! Try again.';
  } else if (userGuess > randomNumber) {
    feedback.innerHTML = 'Too high! Try again.';
  } else {
    feedback.innerHTML = `Correct! You guessed it in ${attempts} attempts.`;
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('feedback').innerHTML = '';
}
