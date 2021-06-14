// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const evenRandomNumber = () => {
    const randomNum = getRndInteger(0, 100)
    for (let i = 0; i <= randomNum; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

evenRandomNumber()

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.

// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
const capitalizedEvenLetters = (string) => {
    let arr = []
    let capitalizedEven = '';
    let capitalizeOdd = '';


    for (i in string) {
        if (i % 2 == 0) {
            capitalizedEven += string[i].toUpperCase()
        } else capitalizedEven += string[i]
    }
    arr.push(capitalizedEven);


    for (i in string) {
        if (i % 2 !== 0) {
            capitalizeOdd += string[i].toUpperCase()
        } else capitalizeOdd += string[i]
    }

    arr.push(capitalizeOdd)

    return arr
}

// console.log(capitalizedEvenLetters("abcdef"))

// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same
//  both backwards and forward, e.g., madam, bob or kayak.

const palindrome = (string) => {
    let IsPalindrome;
    let stringToArr = string.split('')
    let reverseString = stringToArr.reverse()
    for (let i = 0; i < stringToArr.length; i++) {
        let lettersOfString = stringToArr[i];
        for (let j = 0; j < reverseString.length; j++) {
            let lettersOfReverseString = reverseString[j];
            if (lettersOfReverseString === lettersOfString) {
                IsPalindrome = true

            } else IsPalindrome = false
        }
        if (IsPalindrome) {
            return console.log(`${string} is a palindrome`)
        } else {
            return console.log(`${string} is not a palindrome`)
        }
    }

}

// palindrome('madam')

// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0

const array = [-1, 0, 3, 100, 99, 2, 99]
const biggestNumberInArray = (arrayNumber) => {
    let biggestNumber = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        if (biggestNumber < arrayNumber[i]) {
            biggestNumber = arrayNumber[i];
        }
    }
    return biggestNumber
}
// console.log(biggestNumberInArray(array))


// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

const list = [1, 2, 3, 3, 3, 3, 4, 5];

const newArray = (oldArray) => {
    let array = []
    for (let i = 0; i < oldArray.length; i++) {
        if (!(oldArray[i] in array)) {
            array.push(oldArray[i])
        }
    }
    return array
}
// console.log(newArray(list));


