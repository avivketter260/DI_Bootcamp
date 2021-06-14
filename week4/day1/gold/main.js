// Write a JavaScript program to find the sum of all elements in an array.
// Don’t use the sum method !
let numbersForSum = [1, 5, 8, 3, 9, 10];

const sum = () => {
    let sum = 0;
    numbersForSum.forEach((number) => {
        sum += number;
    })
    console.log(sum)
}
// sum();


// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.
let sentence = ['this', 'is', 'just', 'random', 'words', 'just', 'this', 'is', 'fun'];
// let sentence = [1, 5, 8, 3, 9, 10];

const removeDuplicate = () => {
    let fixedsentence = [];
    fixedsentence.push(sentence[0])
    sentence.forEach((word) => {
        if (fixedsentence.indexOf(word) === -1) {
            fixedsentence.push(word)
        }

    })
    console.log(fixedsentence)
}
// removeDuplicate()

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.



let sample = [NaN, 0, 15, false, -22, '', undefined, 47, null];

const certainValues = () => {
    let result = [];
    sample.forEach((elem) => {
        if (elem || elem === 0) result.push(elem)
    })
    return result;
}

// console.log(certainValues())

// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

const repeat = (string, rep) => {
    let result = '';
    let counter = 0;
    while (counter < rep) {
        result += string;
        counter++;
    }
    return result;
}

console.log(repeat('Ha!',3));

let sumNum = 0;
function sumNums(x, y) {
    return sumNum = x + y
}
// console.log(sumNums(1,1))