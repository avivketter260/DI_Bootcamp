const sendData =()=>{
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    fetch(`http://localhost:3000/login?user=${username}&password=${password}`)
    .then(res => res.json())
    .then(res=> {
        console.log(res)
        console.log('this is from main.js')
})
}