
const sendLoginData = () => {
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value



    fetch('http://localhost:3000/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ password, username })
        })




        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.isThere) { // {} === false 
                const p = document.createElement('p')
                p.innerHTML = 'OK Hello your username is ' + username
                const body = document.querySelector('body')
                return body.appendChild(p)

            }

            const p = document.createElement('p')
            p.innerHTML = ' NOT OK Username Or Password dose not exits ' 
            const body = document.querySelector('body')
            return body.appendChild(p)
        })
}


