
const showData = async () => {
  try{
    let data = await fetch('http://localhost:3000/getItems')
    let result = await data.json()
       return createData(result);
  } catch (err) {
    console.log(err)
  }
 
    
}

const createData = (allData) => {
  let root = document.getElementById('root');
  root.innerHTML = '';
  allData.forEach(item => {
    let div = document.createElement('div');
    div.innerHTML += `<h1> item: ${item.item} price: ${item.amount} </h1>`
    root.appendChild(div)
  })
}