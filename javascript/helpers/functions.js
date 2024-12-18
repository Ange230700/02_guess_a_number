// javascript\helpers\functions.js

import { globalVariables } from "../state/management.js";

function checkIfUserInputIsValidNumber(inputSelector) {
  return /^\d+$/.test(document.querySelector(inputSelector).value);
}

function checkIfNumberInputByFirstPlayerMeetsRequirements() {
  return (
    !isNaN(parseInt(document.querySelector("#first-player-input").value, 10)) &&
    0 < parseInt(document.querySelector("#first-player-input").value, 10) &&
    parseInt(document.querySelector("#first-player-input").value, 10) < 50
  );
}

function setGlobalVariable(key, value) {
  return (globalVariables[key] = value);
}

export {
  checkIfUserInputIsValidNumber,
  checkIfNumberInputByFirstPlayerMeetsRequirements,
  setGlobalVariable,
};
