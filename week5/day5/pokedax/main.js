// elements & global var
const pokemonImg = document.querySelector('.pokemon')
const pokemonInfo = document.querySelector('.info')
const next = document.querySelector('.move-right');
const previous = document.querySelector('.move-left');
const btn= document.querySelector('.grin-b') 
let pokemonId;

const loading = ()=>{
    setTimeout(()=>{
        pokemonImg.innerHTML= `<img  src="http://www.complicite.org/_images/loading.gif"  width="150px" height="150px">`
        pokemonInfo.innerHTML=''
    },0.5)}
const getData = async (p) => {
    loading()
    try{
        const random = Math.floor((Math.random() * 807) + 1);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
        const data = await response.json();
        console.log(data)
        let name = await data.name;
        pokemonId = await data.id;
        let height = await data.height;
        let weight = await data.weight;
        let type = await data.types[0].type.name;
        let pokemonImage = await data.sprites.front_default;
    
        pokemonImg.innerHTML = `<img src="${pokemonImage}">`
        setTimeout(() => {
            pokemonInfo.innerHTML = `<h4>name: ${name}</h4><P>id: ${pokemonId}</p><P>weight: ${weight}</p><P>height: ${height}</p>
            <P>type: ${type}</p>`
        }, 500);
    }
    catch(err){
        pokemonImg.innerHTML='Oh no! That Pokemon isn’t available…'
    }
    }
    

btn.addEventListener('click',getData)

next.addEventListener('click',async function(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${++pokemonId}/`);
    const data = await response.json();
    console.log(data)
    let name = await data.name;
    pokemonId = await data.id;
    let height = await data.height;
    let weight = await data.weight;
    let type = await data.types[0].type.name;
    let pokemonImage = await data.sprites.front_default;

    pokemonImg.innerHTML = `<img src="${pokemonImage}">`
    pokemonInfo.innerHTML =''
    setTimeout(() => {
        pokemonInfo.innerHTML = `<h4>name: ${name}</h4><P>id: ${pokemonId}</p><P>weight: ${weight}</p><P>height: ${height}</p>
        <P>type: ${type}</p>`
    }, 500);
})

previous.addEventListener('click',async function(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${--pokemonId}/`);
    const data = await response.json();
    console.log(data)
    let name = await data.name;
    pokemonId = await data.id;
    let height = await data.height;
    let weight = await data.weight;
    let type = await data.types[0].type.name;
    let pokemonImage = await data.sprites.front_default;

    pokemonImg.innerHTML = `<img src="${pokemonImage}">`
    pokemonInfo.innerHTML =''
    setTimeout(() => {
        pokemonInfo.innerHTML = `<h4>name: ${name}</h4><P>id: ${pokemonId}</p><P>weight: ${weight}</p><P>height: ${height}</p>
        <P>type: ${type}</p>`
    }, 500);
})


