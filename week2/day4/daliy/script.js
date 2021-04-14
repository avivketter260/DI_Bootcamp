// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]


const lifeInFrame = () => {
    userString = 'aviv,is,here';
    turnToArray = userString.split(',');
    let astrict = '*';
    let longestWord;
    for (let i = 0; i < turnToArray.length; i++) {
        if (!(turnToArray[i + 1])) break;
        longestWord = turnToArray[i].length > turnToArray[i + 1].length ? turnToArray[i] : turnToArray[i + 1];
    }

    console.log(astrict.repeat((longestWord.length * 2) -2))
    for (j of turnToArray) {
        console.log(`*${j}*`)
    }
    console.log(astrict.repeat((longestWord.length * 2) -2))

}
lifeInFrame()