/**
 * Use the Giphy API Documentoon for this exercise. Use the API KEY provided in the Exercises XP.
Create a program to fetch a gif.
Once the Giphy API has responded with data, append one random GIF to the page.
 */
const body = document.querySelector('body')
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=marvel`);
xhr.responseType = 'json'
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        return console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    setTimeout(() => {
        const div = document.createElement('div');
    let randomNum = getRndInteger(0, xhr.response.data.length - 1)
    console.log(xhr.response.data)
       let randomGif = xhr.response.data[randomNum];
    console.log(randomGif)

       div.innerHTML = `<img src='${randomGif.images.preview_gif.url}' style="height:40rem; widht:40rem;">`;
       body.appendChild(div); 
    },2000);
   

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}