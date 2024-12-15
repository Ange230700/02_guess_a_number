// javascript\dom\manipulation.js

function printAppropriateInstructions(
  playerSectionSelector,
  instructionsSectionSelector,
  instructions,
) {
  document
    .querySelector(playerSectionSelector)
    .querySelector(instructionsSectionSelector).innerText = instructions;
}

function changeUIForSecondPlayerTurn() {
  document.querySelector(".first-player-section").style.display = "none";
  document.querySelector(".second-player-section").style.display = "flex";
}

function emptyInputFields() {
  document.querySelector("#second-player-input").value = "";
  document.querySelector("#first-player-input").value = "";
}

function changeUIForAskingForRestart() {
  document.querySelector("#second-player-input").style.display = "none";
  document.querySelector("#second-player-button").style.display = "none";
  document.querySelector("#play-again-button").style.display = "inline";
}

export {
  printAppropriateInstructions,
  changeUIForSecondPlayerTurn,
  emptyInputFields,
  changeUIForAskingForRestart,
};
