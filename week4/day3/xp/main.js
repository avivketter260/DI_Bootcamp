let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];


// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, congratulate only the Full Stack Residents.

// let helloFirstName= users.map((user)=>{
// console.log(`Hello ${user.firstName}`)
// })

// let congratulate=users.filter((user)=>{
//     if (user.role ==='Full Stack Resident'){
//         return console.log(`congratulate ${user.firstName}`)
//     }
// })

// Exercise 3 : Star Wars
// Instructions
// Using this array 
// 1. Use the reduce() method to combine all of these into a single string.
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


let singleString = epic.reduce((result, item) => {
    return result += ' ' + item
})
// console.log(singleString)


let students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }];

// Use the filter() method to congratulate the students that passed the course.
let congratulate = students.filter((student) => {
if(student.isPassed){
    return console.log(`congratulate ${student.name}`)
}
})