const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4',
    3
]


//   Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.

console.log("this is before fatch " + urls)
let requests = urls.map(url => fetch(url));
console.log("this is after fatch " + requests)




Promise.all(requests)

    .then((x) => {
        x.forEach((url, i) => {
            i++
            console.log(i)
            console.log(url)
        })
    })
    .catch(err => { console.error(err) })