
// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(is_Blank('')); --> true
// console.log(is_Blank('abc')); --> false


const is_Blank = (string) => {
    let result = string.length > 0 ? false : true
    return result
}
console.log(is_Blank(''))

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrev_name("Robin Singh")); --> "Robin S."


const abbrev_name = (string) => {
    let stringToArray = string.split();
    let tempResult = [];
    for (let i in stringToArray) {
        for (let j in stringToArray[i]) {
            tempResult.push(stringToArray[i][j])
            if (j > 0) {
                if (stringToArray[i][j] === stringToArray[i][j].toUpperCase() && stringToArray[i][j] !== ' ') {
                    tempResult.push('.')
                    break;
                }
            }
        }
    }
    let result = tempResult.join('')
    return result
}
console.log(abbrev_name("Robin Singh"))
// Exercise 3 : SwapCase

// Write a JavaScript function which takes a string as an argument 
// and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

const SwapCase = (input) => {
    let stringToArray = input.split();
    let result = [];
    for (let i in stringToArray) {
        for (let j in stringToArray[i]) {
            if (stringToArray[i][j] === stringToArray[i][j].toUpperCase()) {
                //    stringToArray[i][j].toLowerCase()
                result.push(stringToArray[i][j].toLowerCase())
            } else {
                // stringToArray[i][j]= stringToArray[i][j].toUpperCase();
                result.push(stringToArray[i][j].toUpperCase())

            }

        }
    }
    let arrayToString = result.join('')
    return arrayToString
}
// console.log(SwapCase('The Quick Brown Fox'))


// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
const array = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];
const omnipresentValue = (arr, numner) => {
    let trueOrFalse;
    for (i in arr) {
        console.log(arr[i])
        if (arr[i].indexOf(numner) !== -1) {
            trueOrFalse = true
        } else {
            return trueOrFalse = false;

        }
    }
    return trueOrFalse

    // for (let i = 0; i < array.length; i++) {
}
// }
// console.log(omnipresentValue(array, 3))