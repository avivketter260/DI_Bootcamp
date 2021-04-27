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

const 

const arrayToObject = () => {
    let obj = {};
    let getNumOfTimes
    for (let i = 0; i < letters.length; i++) {
        getNumOfTimes = sameValueAppears(letters, letters[i])
        obj[letters[i]] = getNumOfTimes


    }
    return obj
}
console.log(arrayToObject())
