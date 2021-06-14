//EXERCISE XP
let xhr = new XMLHttpRequest();
// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', ' https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr.responseType = 'json'
// 3. Send the request over the network
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { // show the result
        let gifObj = xhr.response.data
        for (let i = 2; i < 12; i++) {
            console.log(gifObj[i])
        }
    }
};

// api.giphy.com/v1/gifs/search
// Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
