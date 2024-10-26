let isThatSetupGameTime = true;

function askPlayerToInputNumber() {
  const numberGivenByPlayer = parseInt(
    prompt(
      isThatSetupGameTime
        ? "Let the first player input the number to guess."
        : "Let the second player input their guess.",
    ),
  );
  console.log(
    isThatSetupGameTime
      ? "The first player input the number to guess. Time for the second player to guess."
      : `The second player input the number ${numberGivenByPlayer}.`,
  );
  return numberGivenByPlayer;
}

function askFirstPlayerToInputNumberForSecondPlayerToGuess() {
  const numberToGuessGivenByFirstPlayer = askPlayerToInputNumber();
  return numberToGuessGivenByFirstPlayer;
}

function checkIfNumberToGuessGivenByFirstPlayerForSecondPlayerToGuessIsValid(
  numberToGuessGivenByFirstPlayer,
) {
  if (
    isNaN(numberToGuessGivenByFirstPlayer) ||
    numberToGuessGivenByFirstPlayer < 0 ||
    50 < numberToGuessGivenByFirstPlayer
  ) {
    console.log("The number to guess should be a number between 0 and 50.");
    return false;
  }

  console.log(
    "The number to guess is valid. Time for the second player to guess.",
  );
  isThatSetupGameTime = !isThatSetupGameTime;
  return true;
}

function makeFirstPlayerSetupTheGame() {
  let numberToGuessGivenByFirstPlayer =
    askFirstPlayerToInputNumberForSecondPlayerToGuess();
  while (
    !checkIfNumberToGuessGivenByFirstPlayerForSecondPlayerToGuessIsValid(
      numberToGuessGivenByFirstPlayer,
    )
  ) {
    numberToGuessGivenByFirstPlayer =
      askFirstPlayerToInputNumberForSecondPlayerToGuess();
  }
  return numberToGuessGivenByFirstPlayer;
}

function askSecondPlayerToInputTheirGuess() {
  const guessNumberGivenBySecondPlayer = askPlayerToInputNumber();
  return guessNumberGivenBySecondPlayer;
}

let NumberOfAttempts = 0;

function checkIfSecondPlayerGuessedTheNumberGivenByFirstPlayer(
  guessNumberGivenBySecondPlayer,
  numberToGuessGivenByFirstPlayer,
) {
  NumberOfAttempts++;
  if (guessNumberGivenBySecondPlayer === numberToGuessGivenByFirstPlayer) {
    console.log(
      NumberOfAttempts === 1
        ? `Wow! Getting it in the first try! Congratulations! The number is indeed ${numberToGuessGivenByFirstPlayer}.`
        : `Congratulations! The number is indeed ${numberToGuessGivenByFirstPlayer}. Number of attempts: ${NumberOfAttempts}`,
    );
    isThatSetupGameTime = !isThatSetupGameTime;
    return true;
  }

  if (guessNumberGivenBySecondPlayer > numberToGuessGivenByFirstPlayer) {
    console.log(`The number is too high. Try again! Number of attempts: ${NumberOfAttempts}`);
    return false;
  }

  console.log(`The number is too low. Try again! Number of attempts: ${NumberOfAttempts}`);
  return false;
}

function makeSecondPlayerGuessTheNumberGivenByFirstPlayer(
  numberToGuessGivenByFirstPlayer,
) {
  let guessNumberGivenBySecondPlayer = askSecondPlayerToInputTheirGuess();
  while (
    !checkIfSecondPlayerGuessedTheNumberGivenByFirstPlayer(
      guessNumberGivenBySecondPlayer,
      numberToGuessGivenByFirstPlayer,
    )
  ) {
    guessNumberGivenBySecondPlayer = askSecondPlayerToInputTheirGuess();
  }
}

function playGame() {
  let numberToGuessGivenByFirstPlayer = makeFirstPlayerSetupTheGame();
  makeSecondPlayerGuessTheNumberGivenByFirstPlayer(
    numberToGuessGivenByFirstPlayer,
  );
}

playGame();
