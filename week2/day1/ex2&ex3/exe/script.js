// Exercise 1 : Find Nemo
// Instructions
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo !"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]!".
// Bonus : If you can’t find Nemo, console.log “I can’t find Nemo”.
// Hint : use an if/else statement

let askUser = prompt('type a message with the word "Nemo"');
const findNemo = askUser.search('Nemo')
if (findNemo === -1) {
    console.log('I can’t find Nemo');
}
else console.log(`I found Nemo at! ${findNemo}`)



//----------------------------------------------------------------
//Exercise 1 : Evaluation(1)
5 >= 1 // true
0 === 1 // false
4 <= 1 // false
1 != 1 // false
"A" > "B" // false
"B" < "C"// true
"a" > "A"// true
"b" < "A"// false
true === false // true 
true != true // false
//----------------------------------------------------------------
//Exercise 2 : Evaluation(2)
let c; //null
let a = 34; //34
let b = 21;//21
a = 2;//36
a + b //55
// Analyse the code below what will be the outcome?
// console.log(3 + 4 + '5');// 7+ '5' = '75'
//----------------------------------------------------------------

// Ask the user for a string of numbers separated by
// commas, console.log the sum of the numbers.
// Hint: use some string methods
const userNumber = prompt('Type 2 numbers sperated by ","');
let userNumArr = userNumber.split(",");
const result = parseInt(userNumArr[0]) + parseInt(userNumArr[1])
console.log(result)



// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of
// the word “Boom”. Follow the rules below:
// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s 
//(n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2
// and 5, return the string in ALL CAPS and add an exclamation mark to the end.
const userNum = prompt('Type a number');
const fromStringToInt = parseInt(userNum);
if (fromStringToInt < 2) {
    console.log('boom');
} else {
    let arr = []
    for (let i = 0; i <= fromStringToInt; i++) {
        arr.push('o');
    }
    let result =arr.join(' ');
    console.log(result);
}
if(fromStringToInt % 2===0){
console.log('boom!');
} else if (fromStringToInt % 5===0){
console.log('BOOM');

} if(fromStringToInt % 2===0 &&fromStringToInt % 5===0 ){
    console.log('BOOM!');

}

