// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.


const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        num > 10 ? resolve(`${num} is greater then 10. succes!`) : reject(`${num} is less then 10. error!`);
    })
}


compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(11)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//   Exercise 2 : Promises
// Instructions
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


// Creat e a promise that resolves itself in 4 seconds and returns a “success” string.
// const promise = new Promise((resolve, reject) => {
//     resolve('success')
// })


.then(result => setTimeout(()=>{ console.log(result)},4000))
.catch(err =>console.log(err))

// let counter=0

Promise.resolve('succsess')
.then(result=>{
    setTimeout(()=>{ 
        console.log(result)
    },4000)})



//     Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3)
.then((three=>{
console.log(three)
}))

Promise.reject('Boo!')
.catch((error=>{
console.log(error)
}))




