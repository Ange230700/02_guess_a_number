// javascript\state\management.js

const globalVariables = {
  numberToGuessGivenByFirstPlayer: null,
  numberOfAttempts: 0,
  minimumNumber: 0,
  maximumNumber: 50,
};

function resetGameState() {
  globalVariables.numberToGuessGivenByFirstPlayer = null;
  globalVariables.numberOfAttempts = 0;
  globalVariables.minimumNumber = 0;
  globalVariables.maximumNumber = 50;
}

export { globalVariables, resetGameState };
