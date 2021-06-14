// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.'let x = 5;
// let x = 5;
// let y = 2;
// if (x > y) {
//     console.log(x);
// } else console.log(y);




// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats




// let newDog = "Chihuahua";
// let newDogLength = newDog.length;
// console.log(newDogLength);
// console.log(newDog.toLowerCase());
// console.log(newDog.toUpperCase());
// newDog === "Chihuahua" ? console.log('I love Chihuahuas, it’s my favorite dog breed') :
//  console.log('I dont care, I prefer cats');





//  Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.


const userNumber = prompt('Type a number');
let stringToNum = parseInt(userNumber);
stringToNum % 2 === 0 ? console.log(`${stringToNum} is an even number`) : console.log(`${stringToNum} is an odd number`)



// Exercise 4 : Switch Case
// Instructions
// Using this code, answer the questions below:


// let whatHappens;
// let direction;

// switch (direction) {
//     case "forward":
//         break;
//         whatHappens = "you encounter a monster";
//     case "back":
//         whatHappens = "you arrived home";
//         break;
//         break;
//     case "right":
//         whatHappens = "you found a river";
//         break;
//     case "left":
//         break;
//         whatHappens = "you run into a troll";
//         break;
//     default:
//         whatHappens = "please enter a valid direction";
// }


// What is the value of the whatHappens variable, when the value of the direction variable is “forward” 
//A: "please enter a valid direction"

// What is the value of the whatHappens variable, when the value of the direction variable is “back”
// A:'you arrived home'

// What is the value of the whatHappens variable, when the value of the direction variable is “right”
//A:"you found a river"

// What is the value of the whatHappens variable, when the value of the direction variable is “left
//A:"please enter a valid direction"



// Exercise 5: Group Chat
// Instructions

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users in a group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:

if(users.length==0){
    console.log('no one is online')
}else if(users.length==1){
    console.log(`${users[0]} is online`)
}else if(users.length ==2){
    console.log(`${users[0]} and ${users[1]} is online`)
}else{
    console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`)

}