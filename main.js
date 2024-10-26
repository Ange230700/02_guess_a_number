function askPlayerToInputNumber() {
    const numberGivenByPlayer = parseInt(prompt("Input a number: "));
    console.log(`The number given by the player is: ${numberGivenByPlayer}`);
    return numberGivenByPlayer;
}

const numberGivenByPlayer = askPlayerToInputNumber();

const numberToGuess = 22;

function checkIfPlayerGuessedTheNumber(numberGivenByPlayer) {
    if (numberGivenByPlayer === numberToGuess) {
        console.log(`Congratulations! The number is indeed ${numberToGuess}`);
    } else {
        if (numberGivenByPlayer > numberToGuess) {
            console.log(`The number is too high. Try again!`);
        } else {
            console.log(`The number is too low. Try again!`);
        }
    }
}

checkIfPlayerGuessedTheNumber(numberGivenByPlayer);