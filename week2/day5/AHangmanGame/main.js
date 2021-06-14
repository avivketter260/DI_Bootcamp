const hangmanGame = () => {
    let dontExitLoop = true;
    const list = [];
    const playerone = prompt('Type a word. The word must have a minimum of 8 letters');
    if (playerone.length < 8) return hangmanGame();
    let hiddenWord = '*'.repeat(playerone.length);
    console.log(hiddenWord);
    let turnPlayerWordToArray = playerone.split('');
    let turnHiddenWordToArray = hiddenWord.split('');

    let counter = 0
    while (counter < 10 && dontExitLoop) {
        const playerTwo = prompt('Guss player1 word by one letter ');

        if (list.length === 0) {
            list.push(playerTwo);
        }
        if (playerTwo in list) {

            console.log(`You already use the letter ${i} here the list : ${list}`)
            break;
        } else list.push(playerTwo)
        console.log(`List of letters ${list.join('')}`)
        counter++;
        if (playerTwo.length === 1) {
            for (let i = 0; i < turnPlayerWordToArray.length; i++) {
                let word = turnPlayerWordToArray[i];
                if (word === playerTwo) {
                    turnHiddenWordToArray[i] = word;
                    console.log(turnHiddenWordToArray.join(''));
                }
            }



            for (let j = 0; j < turnHiddenWordToArray.length; j++) {
                if ('*' === turnHiddenWordToArray[j]) {
                    dontExitLoop = true;
                    break;
                } else {
                    dontExitLoop = false;
                }
            }


        } else console.log('Only one letter not more not less')

    }

    if (counter === 10) return console.log('PLAYER2 YOU LOSE.')
    console.log('PLAYER2 CONGRATS YOU WIN.')

}
hangmanGame()