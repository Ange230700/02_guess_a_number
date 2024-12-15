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

export {
  printAppropriateInstructions,
  changeUIForSecondPlayerTurn,
  emptyInputFields,
};
