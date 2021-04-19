const playTheGame = () => {

    const askUser = confirm(' Would you like to play the game?')
    if (!(askUser)) {
        return alert('No problem, Goodbye')
    }
    const validNumber = askUserFunction();

    const computerNumber = getRndInteger(0, 10)

    test(validNumber, computerNumber);
}

const test = (userNumber, computerNumber) => {
    let i = 0;
    while (i <= 3) {
        if (userNumber === computerNumber) return alert('WINNER');
        if (userNumber > computerNumber) {
            alert('Your number is bigger then the computer’s, guess again')
            userNumber = askUserFunction();
            i++
        }
        if (userNumber < computerNumber) {
            alert('Your number is smaller then the computer’s, guess again');
            userNumber = askUserFunction()
            i++
        }

    }
    return alert('out of chances')
}


const askUserFunction = () => {
    const askUserForNum = prompt(' Type Number between 0 to 10');
    let userNum = parseInt(askUserForNum);
    let validNumber = true;
    if (typeof userNum !== 'number' || !(userNum)) {
        alert('Sorry Not a number, Goodbye');
        validNumber = false;
        
    } else if (userNum > 10 || userNum < 0) {
        alert('Sorry it’s not a good number, Goodbye');
        validNumber = false;
    }
    
    
    while (!(validNumber)) {    
        return askUserFunction()
    }
    
    
    return userNum;
}

// function for random numbers
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}