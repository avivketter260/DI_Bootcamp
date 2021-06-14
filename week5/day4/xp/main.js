// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

const ex1 = (async () => {
    return await fetch("https://swapi.dev/api/starships/9/")
})().then(response => response.json())
    .then(response=> console.log(response));


    // Exercise 2: Analyze
    // Analyze the code provided above what will be the outcome?
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }
    
    async function asyncCall() {
        console.log('calling');
        let result = await resolveAfter2Seconds();
        console.log(result);
    }
    
    asyncCall(); // "calling" after 2 sec "resolved" 