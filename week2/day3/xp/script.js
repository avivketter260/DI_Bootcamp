// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let myChoice = 1
let colors = ["blue", "green", 'pink', "black", "red"];
for (let i = 0; i < colors.length; i++) {
    // console.log(`my ${myChoice}st choice ${colors[i]} `)
    myChoice++
}


// Exercise 2 : List Of People
// Instructions
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// Write code that console.logs Mary’s index. take a look at indexOf on google.
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// let people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// people.splice(2, 1, 'Jason');
// people.push('Aviv');

// for (let i of people) {
//     console.log(i)

//     if (i === "Jason") {
//         break;
//     }
// }

// let copyPepole = people.slice();
// for (y in copyPepole) {
//     if (copyPepole[y] === "Mary") {
//         copyPepole.splice(y, 1);

//     }

//     if (copyPepole[y] === "Aviv") {
//         copyPepole.splice(y, 1);

//     }

// }
// console.log(people.indexOf('Mary'));
// console.log(people.indexOf('foo'));
// let last = copyPepole[copyPepole.length - 1]
// console.log(last)




// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// Hint : Check the data type you receive from the prompt (ie. typeof method)

// let askuser = prompt('Type your number');
// makeToNum = parseInt(askuser);
// while (makeToNum < 10 && typeof makeToNum === 'number') {
//     askuser = prompt('Type your number');
//     makeToNum = parseInt(askuser);
// }

// Exercise 4 : Attendance
// Instructions




// Given the object above where the key is the students name and the value is the country they are from.

// Prompt the student for their name :
// If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."


// let askuser = prompt("Type you'r name");


// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }

//     if ( askuser in guestList) {
//         console.log(`Hi! I'm ${askuser}, and I'm from ${guestList[askuser]}`);
//     } else console.log("Hi! I'm a guest.")





// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).


// let family = {
//     randy: "dad",
//     karla: "mom",
//     wendy: "sister",
//     norman: "dog",
//     sam: "cat"
// }
// for(let i in family){
//     console.log(i)
//     console.log(family[i])

// }


// Exercise 6
// Instructions
//Given the object above, console.log “my name is Rudolf the raindeer”

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// console.log(Object.keys(details)[0] + ' ' + details['my'] + ' ' + Object.keys(details)[1] + ' ' + details['is'] + ' ' + Object.keys(details)[2] + ' ' + details['the'])


//     Exercise 7 : Secret Group
// Instructions
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let newName=[]
let join = names.join()
console.log(join)
let x = join.split('')
console.log(x)
for (let i = 0; i < x.length; i++) {
    if (x[i] === x[i].toUpperCase()) {
    newName += x[i];
    }
}
console.log(newName)
