// Exercise 1 : Array To Object
// Instructions
// Using this array const letters = ['x', 'y', 'z', 'z'];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
const letters = ['x', 'y', 'z', 'z'];




const sameValueAppears = (array, value) => {
    var n = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) { n++ }
    }
    return n;
}
const partTwo = () => {
    let result = {};
    letters.reduce((start, next) => {
        getNumOfTimes = sameValueAppears(letters, next);

        return result[next] = getNumOfTimes
    }, 0)
    return result
}
// console.log(partTwo())
// const arrayToObject = () => {
//     let obj = {};
//     let getNumOfTimes
//     for (let i = 0; i < letters.length; i++) {
//         getNumOfTimes = sameValueAppears(letters, letters[i])
//         obj[letters[i]] = getNumOfTimes


//     }
//     return obj
// }
// console.log(arrayToObject())
/*
Exercise 2 : Let’s Play!
Instructions
Create an array using map() that contains all the usernames from the gameInfo
 array, add an exclamation point (ie. “!”) to the end of every username.
Filter the gameInfo array to only include users who are on the red team.
*/


const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


const addExclamationPointToUser = gameInfo.map((user) => {
    return user.username + '!'
})
// console.log(addExclamationPointToUser)

const teamRedOnly = gameInfo.filter((item) => {
    if (item.team === 'red') return item.username
})
// console.log(teamRedOnly)


// Exercise 3: Dog Competition
// Hint: Dog Years -> the dog’s age is the age multiplied by 7.

// Using the map() method, find the sum of all the dog’s ages in dog years.
// Using the filter() method, find the sum of all the dog’s ages in dog years.
// Using the reduce() method, find the sum of all the dog’s ages in dog years.

const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Cuty',
        age: 5,
        type: 'rabbit'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rex',
        age: 10,
        type: 'dog'
    },
];

// Use a loop to find the sum of all the dog’s ages in dog years.
const loopAndSum = () => {
    let result = 0
    data.filter((dog) => {
        return result += dog.age * 7
    })
    return result
}
// console.log(loopAndSum())
const loopAndSum2 = () => {
    let result = 0
    data.map((dog) => {
        return result += dog.age * 7
    })
    return result
}
// console.log(loopAndSum2())
const loopAndSum3 = () => {

const answer =data.reduce((result,dog) => {
        return result += dog.age * 7
    },0)
    return answer
}

// console.log(loopAndSum3())

// Clean up this email to have no whitespaces. Do it in a
//  single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
userEmail3.trim()


