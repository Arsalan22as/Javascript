
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// named submit handler so we can remove/add it when switching to New Game
function submitGuessHandler(e) {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  console.log(guess);
  validateGuess(guess);
}

submit.addEventListener('click', submitGuessHandler);

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  // change submit button into a New Game button
  submit.value = 'New Game';
  // swap handlers: remove submit handler and add new-game handler
  submit.removeEventListener('click', submitGuessHandler);
  submit.addEventListener('click', startNewGame);
  playGame = false;
}

function startNewGame(e) {
  if (e) e.preventDefault();
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `10`;
  userInput.removeAttribute('disabled');
  userInput.value = '';
  lowOrHi.innerHTML = '';
  // restore submit button
  submit.value = 'Submit guess';
  // swap handlers back
  submit.removeEventListener('click', startNewGame);
  submit.addEventListener('click', submitGuessHandler);
  playGame = true;
}