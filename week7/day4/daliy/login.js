
const getLoginData = async () => {

    const data = await fetch(`http://localhost:3000/login`)
    const result = await data.json()
    console.log(result)
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    console.log(username)
    console.log(password)


    let ifExist = false;
    result.forEach(item => {
        if ((item.username === username || item.password === password)) {
            return ifExist = true
        }
    })
    if (ifExist) {
        document.querySelector('#good').innerHTML = `Hey ${username} welcome back`
        document.querySelector('#bad').innerHTML = ``
        return
    }
    document.querySelector('#good').innerHTML = ``

    document.querySelector('#bad').innerHTML = ` ${username} is not register`

}
