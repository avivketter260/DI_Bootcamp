/*

Create a function called printFullName(studentObj) that accepts an object as a parameter.
For example : printFullName({first: 'Elie', last:'Schoppik'}).
The function should return a string like the example below
printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`
Destructure this object DIRECTLY from the parameters 
(ie. Look at the Advanced Object lesson 
    - Part II : Object destructuring used as an assignment to a function)

The output of the printFullName() function should be the exact same as the
 displayStudentInfo function. (Exercise XP)

*/
const printFullName = ((studentObj)=>{
return console.log(`Your full name is ${studentObj.first} ${studentObj.last}`)
})

printFullName({first: 'Elie', last:'Schoppik'})


// Exercise 2 : Counter Class
// Instructions
// Analyze the code below, what will be the output?

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();//1
  counterOne.increment();//2
  
                  //2
  const counterTwo = counterOne;
  counterTwo.increment();//3
  
  console.log(counterOne.count);//3