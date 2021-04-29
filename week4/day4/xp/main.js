// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// The function should return a string as seen in the example below.
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik'`
let obj = { first: 'Elie', last: 'Schoppik' }


const displayStudentInfo = ({ first, last }) => {
    console.log(`'Your full name is ${first} ${last}`);
}

displayStudentInfo(obj)

// Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]



const users = { user1: 18273, user2: 92833, user3: 90315 }
let toArr = Object.entries(users)

const x = toArr.map((item) => {
    item[1] = item[1] * 2
    return item
})
// console.log(x)


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);// object

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  
// Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}; // this one


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};