function askUserToInputNumber() {
    const numberGivenByUser = parseInt(prompt("Input a number: "));
    console.log(`The number given by the user is: ${numberGivenByUser}`);
    return numberGivenByUser;
}

const numberGivenByUser = askUserToInputNumber();