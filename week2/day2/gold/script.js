'use strict'

// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
// let askUser = prompt(' which language you speak?');
// const language = askUser.toLowerCase();
// console.log(language)
// switch (language) {
//     case 'french':
//         console.log("Bonjour");
//         break;
//     case 'english':
//         console.log("Hello");
//         break;
//     case 'hebrew':
//         console.log('Shalom');
//         break;
//     default:
//         console.log(`01110011 01101111 01110010 01110010 01111001`);
// }


//----------------------------------------------------------------------

// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

// const askUserGrade = prompt("Type you'r grade")
// const result = parseInt(askUserGrade);
// if (result > 90) {
//     console.log('A');
// } else if (result <= 90 && result >= 80) {
//     console.log('B');

// } else if (result <= 80 && result >= 70) {
//     console.log('C');

// } else console.log('D');

//----------------------------------------------------------------------

// Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.
let  askUserVerb= prompt('Type some kinde of  verb');
console.log(askUserVerb.includes("ing"));
if(askUserVerb.length>=3 && !(askUserVerb.includes("ing"))){
  console.log(askUserVerb+"ing");
} else if(askUserVerb.length>=3 && askUserVerb.includes("ing")){
  console.log(askUserVerb+"ly");
}else console.log(askUserVerb);