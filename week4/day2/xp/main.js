// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.
const number = (number = 4, number2 = 5) => number + number2;
console.log(number())


// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));//13


//Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1))//31)


const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
// console.log(add5(12))//5+12 = 17


// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))// 16