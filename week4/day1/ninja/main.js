// Exercise 1 : Menu
// Instructions
// Using the array below:

let menu = [
    {
        type: "starter",
        name: "Houmous with Pita"
    },
    {
        type: "starter",
        name: "Vegetable Soup with Houmous peas"
    },
    {
        type: "dessert",
        name: "Chocolate Cake"
    }
]
// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
// Using an array method, check if all the elements in the array are starters.
// Using an array method, check if there is at least one element in the
//  array that is a main course. If not, add a main course of your choice to the array.

// Using this array :

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"]
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. 
// The value of the key should be true if the name of the course contains at least one
//  element from the vegetarian array.
let mainCourse = true;

const menuObj = () => {
    menu.forEach((obj, i) => {
        obj.type === 'dessert' ? console.log('yes ' + obj.name) : '';
        obj.type !== 'starter' ? console.log(`there is one ${obj.type} as well `) : '';
        obj.type === 'main' ? mainCourse = true : mainCourse = false;
        for (let j of vegetarian) {
            if (obj.name.toLowerCase().includes(j, i)) {
                obj.vegetarian = true
            }
        }

    })
    if (!mainCourse) {
        menu.push({
            type: 'main',
            name: 'Roasted Chicken'
        })
    }
    console.log(menu)
}
// menuObj()


/*
Exercise 2 : Chop Into Chunks
Instructions
Write a JavaScript function that takes 2 parameters: a string and a number.
The function should chop the string into chunks of your chosen length 
(the second parameter), and the outcome should be represented in an array.
Example:

console.log(string_chop('w3resource',2)); 
["w3", "re", "so", "ur", "ce"] 
*/


const chopTheString = (string, number) => {
    if (string === null) return [];
    string.match()
    return number > 0 ? string.match(new RegExp('.{1,' + number + '}', 'g')) : [string];
}

// console.log(chopTheString('avivKetter', 3))


// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.

const search_word = (string, word) => {
    let counter = 0
    let loseWord;
    let splitIt = string.split(' ')
    for (let i of splitIt) {
        if (i === word) {
            counter++;
            loseWord = i;
        }
    }
    console.log(`${loseWord} was found ${counter} ${timesOrtime = counter > 1 ? 'times' : 'time'}`)

}

search_word('The quick brown fox', 'fox');
