
// Exercise 1 : Checking The BMI
// Instructions
// Create two objects, each object should hold a persons details. Here are the details:
// FullName
// Mass
// Height
// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.


const firsePerson = {
    fullName: 'aviv',
    mass: 70,
    height: 1.74,
    calculates: function () {
        let bmi = this.mass / this.height ** 2;
        return bmi
    }
};


const secondPerson = {
    fullName: 'tal',
    mass: 80,
    height: 1.70,
    calculates: function () {
        let bmi = this.mass / this.height ** 2;
        return bmi
    }
};

const compares = (x, y) => {
    if (x.calculates() > y.calculates()) {
        return console.log(y.fullName)
    
} else return console.log(y.fullName)

}
compares(firsePerson, secondPerson)



// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
// Your function must calculate and console.log the average.
// If the average is above 65 let the user know they passed
// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

let grades = [100, 90, 50, 70, 80];

const findAvg = (gradesList) => {
    let sum = 0;
    let gradeLength = gradesList.length
    for (let i = 0; i < gradeLength; i++) {
        sum += gradesList[i]
    }
    let avrage = sum / gradeLength
    return avrage
}

const passOrNot = () => {

    const result = findAvg(grades) > 65 ? console.log('You pass! :) ') : console.log('You fail! :( ')
    return result
}


// console.log(findAvg(grades))
// passOrNot();