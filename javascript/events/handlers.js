// javascript\events\handlers.js

import {
  createFirstPlayerSectionComponent,
  createSecondPlayerSectionComponent,
} from "../components/creations.js";
import {
  changeUIForSecondPlayerTurn,
  emptyInputFields,
  printAppropriateInstructions,
} from "../dom/manipulation.js";
import {
  checkIfNumberInputByFirstPlayerMeetsRequirements,
  checkIfUserInputIsValidNumber,
  setGlobalVariable,
} from "../helpers/functions.js";
import { globalVariables } from "../state/management.js";

const handleClickOnFirstPlayerButton = () => {
  if (checkIfUserInputIsValidNumber("#first-player-input") === false) {
    printAppropriateInstructions(
      ".first-player-section",
      ".first-player-section .hints-and-instructions",
      "Please enter a valid number between 0 and 50.",
    );
    return;
  }

  if (checkIfNumberInputByFirstPlayerMeetsRequirements() === false) {
    printAppropriateInstructions(
      ".first-player-section",
      ".first-player-section .hints-and-instructions",
      "The number to guess should be a number between 0 and 50.",
    );
  } else {
    setGlobalVariable(
      "numberToGuessGivenByFirstPlayer",
      parseInt(document.querySelector("#first-player-input").value.trim(), 10),
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
  if (checkIfUserInputIsValidNumber("#second-player-input") === false) {
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

      document
        .querySelector(".second-player-section")
        .querySelector(
          ".second-player-section .hints-and-instructions",
        ).innerText += "\nUp for another round?";

      document.querySelector("#second-player-input").style.display = "none";
      document.querySelector("#second-player-button").style.display = "none";
      document.querySelector("#play-again-button").style.display = "inline";
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
      globalVariables.minimumNumber = Math.max(
        globalVariables.minimumNumber,
        parseInt(document.querySelector("#second-player-input").value, 10),
      );

      document
        .querySelector(".second-player-section")
        .querySelector(
          ".second-player-section .hints-and-instructions",
        ).innerText =
        `The number is too low. Try again! Surely now, the number is between ${globalVariables.minimumNumber} and ${globalVariables.maximumNumber}. Number of attempts: ${globalVariables.numberOfAttempts}.`;
    }

    document.querySelector("#second-player-input").value = "";
  }
};

const handleClickOnPlayAgainButton = () => {
  // Reset game state variables
  globalVariables.numberToGuessGivenByFirstPlayer = null;
  globalVariables.numberOfAttempts = 0;
  globalVariables.minimumNumber = 0;
  globalVariables.maximumNumber = 50;

  // Reset first player's section
  document.querySelector("#first-player-input").value = "";
  document
    .querySelector(".first-player-section")
    .querySelector(".first-player-section .hints-and-instructions").innerText =
    "Let the first player input the number to guess. It should be a number between 0 and 50.";

  // Hide second player's section and show first player's section
  document.querySelector(".second-player-section").style.display = "none";
  document.querySelector(".first-player-section").style.display = "flex";

  // Reset second player's inputs and buttons
  document.querySelector("#second-player-input").value = "";
  document.querySelector("#second-player-input").style.display = "inline";
  document.querySelector("#second-player-button").style.display = "inline";
  document.querySelector("#play-again-button").style.display = "none";
};

const handleGameSectionDisplay = () => {
  document.querySelector(".game-section").innerHTML = `
    ${createFirstPlayerSectionComponent()}
    ${createSecondPlayerSectionComponent()}
  `;

  document
    .querySelector("#first-player-button")
    .addEventListener("click", handleClickOnFirstPlayerButton);

  document
    .querySelector("#second-player-button")
    .addEventListener("click", handleClickOnSecondPlayerButton);

  document
    .querySelector("#play-again-button")
    .addEventListener("click", handleClickOnPlayAgainButton);
};

export {
  handleGameSectionDisplay,
  handleClickOnFirstPlayerButton,
  handleClickOnSecondPlayerButton,
  handleClickOnPlayAgainButton,
};
