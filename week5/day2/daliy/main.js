let xhr = new XMLHttpRequest();



const body = document.querySelector('body')
const displayGif = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault()
    })

    const inputVal = document.querySelector('#gif').value;
    //

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${inputVal}`);
    xhr.responseType = 'json'
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            return console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
        let gifObj = xhr.response.data[0]
        const div = document.createElement('div');
        div.innerHTML = `<img src='${gifObj.images.preview_gif.url}' style="height:150px; widht:150px;"><button class="btn">Delete</button>`;
        body.appendChild(div);
        const divs = document.querySelectorAll('div')
        divs.forEach((gif) => { gif.addEventListener('click', deleteGif) })
    };
}

function deleteGif() {
    this.remove()
}

const deleteAll = () => {
const divs = document.querySelectorAll('div')
    divs.forEach((div) => { div.remove() })

}