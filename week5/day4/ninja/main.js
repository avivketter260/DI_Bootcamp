
// Add a try catch block to “Exercise XP Gold” in order to catch any errors.
// To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.

const urls = [
    2434,
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];
const x= [ 'users', 'posts', 'albums' ];
let index=0;


const getData = async function () {
    try{
        for (let url of urls) {
            let response = await fetch(url)
            let data = await response.json()
            console.log(x[index])
            console.log(data)
            index++
        }
    }
   catch(err){
       console.log('ooooooops.')
   }

}
// getData()



// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// //The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () {
//     console.log('==CONCURRENT START with Promise.all==');
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//         console.log(messages[0]);
//         console.log(messages[1]);
//     });
// }

// setTimeout(concurrentPromise, 1000)
 /* 
A: '==CONCURRENT START with Promise.all==' "starting slow promise" "starting fast promise" "fast promise is done" "slow promise is done" "slow" "fast"
*/




let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)


//'==PARALLEL with Promise.then=='  "starting slow promise" "starting fast promise" "slow promise is done" "slow"  "fast promise is done" "fast"