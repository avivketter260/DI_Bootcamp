// elements 
const characterName = document.querySelector('#name')
const height = document.querySelector('#height')
const gender = document.querySelector('#gender')
const birthYear = document.querySelector('#birth-year')
const homeWorld = document.querySelector('#home-world')
let randonNumbe;

const changeChracter = ()=>{
   return randonNumber = getRndInteger(1, 83);
}

const randomCharacter = async () => {
    const url = `http://swapi.dev/api/people/${randonNumber}/`
    let response = await fetch(url)
    let data = response.json()
    return data
}


   
    setInterval(()=>{
        randomCharacter()
        .then(res => {
            (async function homeWorld() {
                console.log(res)
                const getHomeWorld = await fetch(res.homeworld)
                console.log(getHomeWorld)
                const data = getHomeWorld.json()
                return data
            })().then((res => {
                let planet = res.name
                homeWorld.innerHTML = `Home World: ${planet}`;
    
            }))
            characterName.innerHTML = `${res.name}`;
            height.innerHTML = `Height: ${res.height}`;
            gender.innerHTML = `Gender: ${res.gender}`;
            birthYear.innerHTML = `Birth Year: ${res.birth_year}`;
        })
    },1000)
   
    .catch(err => err )


/// randomNumber function max and min both included
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}