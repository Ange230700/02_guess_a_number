// main.js

let numberToGuessGivenByFirstPlayer;
let numberOfAttempts;
let minimumNumber;
let maximumNumber;

// Get references to DOM elements
const firstPlayerSection = document.querySelector(".first-player-section");
const firstPlayerInput = document.querySelector("#first-player-input");
const firstPlayerButton = document.querySelector("#first-player-button");
const firstPlayerHints = firstPlayerSection.querySelector(
  ".first-player-section .hints-and-instructions",
);

const secondPlayerSection = document.querySelector(".second-player-section");
const secondPlayerInput = document.querySelector("#second-player-input");
const secondPlayerButton = document.querySelector("#second-player-button");
const secondPlayerHints = secondPlayerSection.querySelector(
  ".second-player-section .hints-and-instructions",
);
const playAgainButton = document.querySelector("#play-again-button");

// Event listener for the first player's submit button
firstPlayerButton.addEventListener("click", function () {
  const numberToGuess = parseInt(firstPlayerInput.value, 10);

  if (isNaN(numberToGuess) || numberToGuess < 0 || numberToGuess > 50) {
    firstPlayerHints.innerText =
      "The number to guess should be a number between 0 and 50.";
  } else {
    numberToGuessGivenByFirstPlayer = numberToGuess;
    numberOfAttempts = 0;
    minimumNumber = 0;
    maximumNumber = 50;

    // Hide first player's section and show second player's section
    firstPlayerSection.style.display = "none";
    secondPlayerSection.style.display = "block";

    secondPlayerHints.innerText = "Let the second player input their guess.";
    secondPlayerInput.value = "";
  }
});

// Event listener for the second player's submit button
secondPlayerButton.addEventListener("click", function () {
  const guess = parseInt(secondPlayerInput.value, 10);

  if (isNaN(guess) || guess < 0 || guess > 50) {
    secondPlayerHints.innerText =
      "Please enter a valid number between 0 and 50.";
  } else {
    numberOfAttempts++;

    if (guess === numberToGuessGivenByFirstPlayer) {
      const message =
        numberOfAttempts === 1
          ? `Wow! Getting it in the first try! Congratulations! The number is indeed ${numberToGuessGivenByFirstPlayer}.`
          : `Congratulations! The number is indeed ${numberToGuessGivenByFirstPlayer}. Number of attempts: ${numberOfAttempts}`;

      secondPlayerHints.innerText = message;

      // Let the second player know the game is over and that they can play again
      secondPlayerHints.innerText += "\nUp for another round?";

      secondPlayerInput.style.display = "none";
      secondPlayerButton.style.display = "none";
      playAgainButton.style.display = "inline";
    } else if (guess > numberToGuessGivenByFirstPlayer) {
      maximumNumber = Math.min(maximumNumber, guess);

      secondPlayerHints.innerText = `The number is too high. Try again! Surely now, the number is between ${minimumNumber} and ${maximumNumber}. Number of attempts: ${numberOfAttempts}.`;
    } else {
      minimumNumber = Math.max(minimumNumber, guess);

      secondPlayerHints.innerText = `The number is too low. Try again! Surely now, the number is between ${minimumNumber} and ${maximumNumber}. Number of attempts: ${numberOfAttempts}.`;
    }

    secondPlayerInput.value = "";
  }
});

// Event listener for the play again button
playAgainButton.addEventListener('click', function () {
  // Reset game state variables
  numberToGuessGivenByFirstPlayer = null;
  numberOfAttempts = 0;
  minimumNumber = 0;
  maximumNumber = 50;

  // Reset first player's section
  firstPlayerInput.value = '';
  firstPlayerHints.textContent =
    'Let the first player input the number to guess. It should be a number between 0 and 50.';

  // Hide second player's section and show first player's section
  secondPlayerSection.style.display = 'none';
  firstPlayerSection.style.display = 'block';

  // Reset second player's inputs and buttons
  secondPlayerInput.value = '';
  secondPlayerInput.style.display = 'inline';
  secondPlayerButton.style.display = 'inline';
  playAgainButton.style.display = 'none';
});
