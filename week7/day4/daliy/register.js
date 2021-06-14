
const sendDataToServer = async () => {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value
     await getDataFromServer()
    
    await fetch(`http://localhost:3000/register`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password, username })
        })
}

const getDataFromServer = async () => {
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value
    const data = await fetch(`http://localhost:3000/register`)
    const result = await data.json()

    let ifExist = false;
    
    
    result.forEach(item => {
        if ((item.username === username || item.password === password )) {
            return ifExist = true
        }
    })


    if (ifExist){
     document.querySelector('#exist').style.display = 'block'
     return document.querySelector('#notExist').style.display = 'none'

    }
    document.querySelector('#exist').style.display = 'block'
    document.querySelector('#notExist').style.display = 'none'

}


