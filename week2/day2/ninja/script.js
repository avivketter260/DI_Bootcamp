// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// let pepoleOne = 1991;
// let pepoleTwo = 1995;
// let currentYear=new Date().getFullYear()
// let pepoleOneAge = currentYear - pepoleOne;
// let pepoleTwoAge =  currentYear - pepoleTwo;
// let halfAge= pepoleOneAge / 2;
// let result = currentYear - halfAge
// console.log(result)



// Exercise 2 : Zip Codes 
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// let zipCode = prompt('Type your zip code (5 number only)')
// let tunrToNum = parseInt(zipCode)
// if (zipCode.length === 5 && !(zipCode.includes(' '))&& typeof tunrToNum === "number") {
//     console.log(`You'r zip code is ${tunrToNum}`)
// }


// part 2
// let regex =  new RegExp("[0-9]{1,5}");
// let zipCode = prompt('Type your zip code (5 number only)')
// let test= regex.exec(zipCode);
// let result = parseInt(test)
// console.log(typeof result === "number")
// if (!(zipCode.includes(' '))&& typeof result === "number") {
//     console.log(`You'r zip code is ${result}`)
// }



// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
let i = 0;
let userWord = prompt('Type a word...');
const regex = new RegExp('[a,e,i,u,o]');
let index = 0;
while (i < userWord.length) {
    index = typeof userWord.match(regex).index ==="number" ? userWord.match(regex).index: i=userWord.length;
    if (index >= 0 && index <= userWord.length - 1) {
        let result = userWord.replace(userWord[index], 'v');
        userWord = result;
        console.log(userWord);
    } 


    i++;
}
console.log(userWord);
