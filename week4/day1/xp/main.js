// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); //3
// }

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }//a=5

// function q22() {
//     alert(a); //a=5
// }


// //#3
// function q3() {
//     window.a = "hello"; //undefined
// }


// function q32() {
//     alert(a);
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test"; 
//     alert(a); //test
// }

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a); // a= 5
// }
// alert(a); // a=2

function winBattle() {
    return true;
}

function experiencePoints() {
    let experiencePoints = winBattle() ? 10 : 1;
    return experiencePoints
}

// console.log(experiencePoints())

// Exercise 3 : Colors
// Instructions
// Using this array :

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following
//  order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

const Colors = () => {
    let counter = 1;
    colors.forEach((color) => {
        return console.log(`${counter}# choice is ${color}`), counter++;
    })
}
// Colors();

// Exercise 4 : Colors #2
// Instructions
// Using these arrays :

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

const ColorsV2 = () => {
    let counter = 1;
    colors.forEach((color) => {
        switch (color) {
            case 'Blue':
                return console.log(`${counter}${ordinal[1]} choice is ${color}`), counter++;
            case 'Green':
                return console.log(`${counter}${ordinal[2]} choice is ${color}`), counter++;
            case 'Red':
                return console.log(`${counter}${ordinal[3]} choice is ${color}`), counter++;

            default:
                return console.log(`${counter}${ordinal[0]} choice is ${color}`), counter++;
        }

    })

}
//ColorsV2()


// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.
// console.log(isString('hello')); 
//true
//false
const isString = (input) => {
    let isString = typeof input === 'string' ? true : false;
    return isString
}
// console.log(isString([1, 2, 4, 0]));

/**
 * 

Exercise 6 : Bank Details
Instructions
In this exercise, you have to decide which type of variables you have to use:

Create a global variable called bankAmount which value is the amount of 
money currently in your account.
Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
Create an array with all your monthly expenses -
 both positive and negative (money made and money spent).
Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
Create a program that modifies the expenses so that they will include taxes 
(multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month.
 */
let bankAmount = 500;
let vat = 0.17;
let details = [200, -100, 146, 167, -2900]

const bankDetails = () => {
    let sum = 0;
    details.forEach((money) => {
        let afterTax = money * vat
        sum += afterTax
    })
    return sum + bankAmount
}
console.log(bankDetails())