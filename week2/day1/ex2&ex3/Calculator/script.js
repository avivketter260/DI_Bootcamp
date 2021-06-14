'use strict'

// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!


let user1= prompt('Please enter first number')
let user2 = prompt('Please enter second number')
var num1 = parseInt(user1);
 var num2 = parseInt(user2);
let resultSum= num1 + num2;
let resultMultiply= num1 * num2;
let resultDivide = num1 / num2;
resultSubtract= num1 - num2
alert('the Sum of '+num1+ ' and ' +num2 +' is '+ resultSum);
alert('the Multiply of '+num1+ ' and ' +num2 +' is '+ resultMultiply);
alert('the Subtract of '+num1+ ' and ' +num2 +' is '+ resultSubtract);
alert('the Divide of '+num1+ ' and ' +num2 +' is '+ resultDivide);

