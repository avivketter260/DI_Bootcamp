
const sendRegisterData = () => {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value

    fetch('http://localhost:3000/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ firstName, lastName, email, username, password })
        })


        
        .then(res => res.json())
        .then((res) => {
            console.log(res.err.detail)
            const p = document.createElement('p')
            p.innerHTML = res.err.detail
            const body = document.querySelector('body')
            body.appendChild(p)

        })
  
}

