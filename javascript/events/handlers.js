// javascript\events\handlers.js

import {
  changeUIForAskingForRestart,
  changeUIForFirstPlayerSetup,
  changeUIForSecondPlayerTurn,
  emptyInputFields,
  printAppropriateInstructions,
  resetSecondPlayerUI,
  setGameSectionHtmlContent,
  waitForClickOnButtons,
} from "../dom/manipulation.js";
import {
  checkIfNumberInputByFirstPlayerMeetsRequirements,
  checkIfUserInputIsValidNumber,
  setGlobalVariable,
} from "../helpers/functions.js";
import { globalVariables, resetGameState } from "../state/management.js";

const handleClickOnFirstPlayerButton = () => {
  if (!checkIfUserInputIsValidNumber("#first-player-input")) {
    printAppropriateInstructions(
      ".first-player-section",
      ".first-player-section .hints-and-instructions",
      "Please enter a valid number between 0 and 50.",
    );
    return;
  }

  if (!checkIfNumberInputByFirstPlayerMeetsRequirements()) {
    printAppropriateInstructions(
      ".first-player-section",
      ".first-player-section .hints-and-instructions",
      "The number to guess should be a number between 0 and 50.",
    );
  } else {
    setGlobalVariable(
      "numberToGuessGivenByFirstPlayer",
      parseInt(document.querySelector("#first-player-input").value, 10),
    );

    changeUIForSecondPlayerTurn();

    printAppropriateInstructions(
      ".second-player-section",
      ".second-player-section .hints-and-instructions",
      "Let the second player input their guess.",
    );

    emptyInputFields();
  }
};

const handleClickOnSecondPlayerButton = () => {
  if (!checkIfUserInputIsValidNumber("#second-player-input")) {
    printAppropriateInstructions(
      ".second-player-section",
      ".second-player-section .hints-and-instructions",
      "Please enter a valid number between 0 and 50.",
    );
  } else {
    globalVariables.numberOfAttempts++;

    if (
      parseInt(document.querySelector("#second-player-input").value, 10) ===
      globalVariables.numberToGuessGivenByFirstPlayer
    ) {
      printAppropriateInstructions(
        ".second-player-section",
        ".second-player-section .hints-and-instructions",
        globalVariables.numberOfAttempts === 1
          ? `Wow! Getting it in the first try! Congratulations! The number is indeed ${globalVariables.numberToGuessGivenByFirstPlayer}.`
          : `Congratulations! The number is indeed ${globalVariables.numberToGuessGivenByFirstPlayer}. Number of attempts: ${globalVariables.numberOfAttempts}`,
      );

      changeUIForAskingForRestart();
    } else if (
      parseInt(document.querySelector("#second-player-input").value, 10) >
      globalVariables.numberToGuessGivenByFirstPlayer
    ) {
      setGlobalVariable(
        "maximumNumber",
        Math.min(
          globalVariables.maximumNumber,
          parseInt(document.querySelector("#second-player-input").value, 10),
        ),
      );

      printAppropriateInstructions(
        ".second-player-section",
        ".second-player-section .hints-and-instructions",
        `The number is too high. Try again! Surely now, the number is between ${globalVariables.minimumNumber} and ${globalVariables.maximumNumber}. Number of attempts: ${globalVariables.numberOfAttempts}.`,
      );
    } else {
      setGlobalVariable(
        "minimumNumber",
        Math.max(
          globalVariables.minimumNumber,
          parseInt(document.querySelector("#second-player-input").value, 10),
        ),
      );

      printAppropriateInstructions(
        ".second-player-section",
        ".second-player-section .hints-and-instructions",
        `The number is too low. Try again! Surely now, the number is between ${globalVariables.minimumNumber} and ${globalVariables.maximumNumber}. Number of attempts: ${globalVariables.numberOfAttempts}.`,
      );
    }

    document.querySelector("#second-player-input").value = "";
  }
};

const handleClickOnPlayAgainButton = () => {
  resetGameState();

  document.querySelector("#first-player-input").value = "";

  printAppropriateInstructions(
    ".first-player-section",
    ".first-player-section .hints-and-instructions",
    "Let the first player input the number to guess. It should be a number between 0 and 50.",
  );

  changeUIForFirstPlayerSetup();
  resetSecondPlayerUI();
};

const handleGameSectionDisplay = () => {
  setGameSectionHtmlContent();
  waitForClickOnButtons();
};

export {
  handleGameSectionDisplay,
  handleClickOnFirstPlayerButton,
  handleClickOnSecondPlayerButton,
  handleClickOnPlayAgainButton,
};
