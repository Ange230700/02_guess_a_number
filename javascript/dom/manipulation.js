// javascript\dom\manipulation.js

import {
  createFirstPlayerSectionComponent,
  createSecondPlayerSectionComponent,
} from "../components/creations.js";
import {
  handleGameSectionDisplay,
  handleClickOnFirstPlayerButton,
  handleClickOnPlayAgainButton,
  handleClickOnSecondPlayerButton,
} from "../events/handlers.js";

function waitForLoadingOfDOMContent() {
  document.addEventListener("DOMContentLoaded", handleGameSectionDisplay);
}

function setGameSectionHtmlContent() {
  document.querySelector(".game-section").innerHTML = `
    ${createFirstPlayerSectionComponent()}
    ${createSecondPlayerSectionComponent()}
  `;
}

function waitForClickOnButtons() {
  document
    .querySelector("#first-player-button")
    .addEventListener("click", handleClickOnFirstPlayerButton);

  document
    .querySelector("#second-player-button")
    .addEventListener("click", handleClickOnSecondPlayerButton);

  document
    .querySelector("#play-again-button")
    .addEventListener("click", handleClickOnPlayAgainButton);
}

function printAppropriateInstructions(
  playerSectionSelector,
  instructionsSectionSelector,
  instructions,
) {
  document
    .querySelector(playerSectionSelector)
    .querySelector(instructionsSectionSelector).innerText = instructions;
}

function changeUIForFirstPlayerSetup() {
  document.querySelector(".second-player-section").style.display = "none";
  document.querySelector(".first-player-section").style.display = "flex";
}

function emptyInputFields() {
  document.querySelector("#second-player-input").value = "";
  document.querySelector("#first-player-input").value = "";
}

function resetSecondPlayerUI() {
  emptyInputFields();
  document.querySelector("#second-player-input").style.display = "inline";
  document.querySelector("#second-player-button").style.display = "inline";
  document.querySelector("#play-again-button").style.display = "none";
}

function changeUIForSecondPlayerTurn() {
  document.querySelector(".first-player-section").style.display = "none";
  document.querySelector(".second-player-section").style.display = "flex";
}

function changeUIForAskingForRestart() {
  document
    .querySelector(".second-player-section")
    .querySelector(
      ".second-player-section .hints-and-instructions",
    ).innerText += "\nUp for another round?";
  document.querySelector("#second-player-input").style.display = "none";
  document.querySelector("#second-player-button").style.display = "none";
  document.querySelector("#play-again-button").style.display = "inline";
}

export {
  waitForLoadingOfDOMContent,
  setGameSectionHtmlContent,
  waitForClickOnButtons,
  printAppropriateInstructions,
  changeUIForFirstPlayerSetup,
  resetSecondPlayerUI,
  changeUIForSecondPlayerTurn,
  emptyInputFields,
  changeUIForAskingForRestart,
};
