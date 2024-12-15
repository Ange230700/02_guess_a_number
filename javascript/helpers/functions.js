// javascript\helpers\functions.js

import { globalVariables } from "../state/management.js";

function checkIfUserInputIsValidNumber(inputSelector) {
  if (!/^\d+$/.test(document.querySelector(inputSelector).value.trim())) {
    return false;
  }

  return true;
}

function checkIfNumberInputByFirstPlayerMeetsRequirements() {
  if (
    isNaN(
      parseInt(document.querySelector("#first-player-input").value.trim(), 10),
    ) ||
    parseInt(document.querySelector("#first-player-input").value.trim(), 10) <
      0 ||
    parseInt(document.querySelector("#first-player-input").value.trim(), 10) >
      50
  ) {
    return false;
  }

  return true;
}

function setGlobalVariable(key, value) {
  return (globalVariables[key] = value);
}

export {
  checkIfUserInputIsValidNumber,
  checkIfNumberInputByFirstPlayerMeetsRequirements,
  setGlobalVariable,
};
