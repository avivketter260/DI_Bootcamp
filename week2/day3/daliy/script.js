// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// const asterisk = () => {
//     let asterisk = "";
//     let size = 6;
//     for (let i = 1; i <= size; i++) {
//         asterisk += '*'
//         console.log(asterisk);
//     }
// }

// asterisk()

// const secondAsterisk = () => {
//     let sixRows = 6;
//     let asterisk = '';
//     for (let i = 1; i <= sixRows; i++) {
//         for (let j = 1; j <= i; j++) {
//             asterisk += '*';
//         }
//             console.log(asterisk)
//             asterisk='';
//     }
// }

// secondAsterisk()






// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google



const numbers = [5,0,9,1,7,4,2,6,3,8];

console.log(numbers.toString())
console.log(numbers.join(' '))
console.log(numbers.join(','))
console.log(numbers.join('+'))



// function get 1 perameter in this case nuber array
let newSort = (newOrder) => {
    // length of the array for the loop
    let len = newOrder.length;
    // make suer that all the numbers are sorted the way i like
    for (let i = 0; i < len; i++) {
        // check all the numbers in the arry and bring the biggest one to the pistion zero
        for (let j = 0; j < len; j++) {
            // if one of them is bigger 
            if (newOrder[j] < newOrder[j + 1]) {
                // save the smaller one in lrt tmp
                let tmp = newOrder[j];
                // the array on posstion smaller one replace with the bigger one
                newOrder[j] = newOrder[j + 1];
                // where was the bigger one now is the smaller one
                newOrder[j + 1] = tmp;
            }
        }
    }
    return newOrder;
};
console.log(newSort(numbers))