const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const Client = require('pg').Client
const app = exp();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());


const registerAndLogin = new Client({
    user: 'postgres',
    password: '1234rewq',
    host: 'localhost',
    port: '5433',
    database: 'registerAndLogin'
})


app.post('/register', (req, res) => {
    console.log('post in register...')
    console.log(req.body)
    sendRegisterDataToDb(req.body)

        .then((result) => {
            res.send({ err: result })
        })
        .catch(err =>console.log(err))
})



app.post('/login', (req, res) => {
    console.log('post in register...')
    console.log(req.body)
    sendloginDataToDb(req.body)


        .then((result) => {
            res.send({ isThere: result })
        })
})



const sendRegisterDataToDb = async (data) => {

    try {
        await registerAndLogin.connect()
        console.log('connect')
        await registerAndLogin.query(`insert into Register values ($1,$2,$3,$4,$5,$6)`, [2, data.firstName, data.lastName, data.email, data.username, 'Today'])
        const result = await registerAndLogin.query('SELECT * FROM Register')
        console.table(result.rows)

    }
    catch (err) {
        console.log(`somtihng went worng ${err}`)
        return err
    }
    finally {
        await registerAndLogin.end()
        console.log('finally')
    }
}



const sendloginDataToDb = async (data) => {
    try {
        await registerAndLogin.connect()
        console.log('connect')
        const RegisterData = await registerAndLogin.query('SELECT * FROM Register')
        console.log(RegisterData.rows)

        let allUsers = RegisterData.rows

        let userExits = false;
        allUsers.forEach(user => {
            if (user.username === data.username) {
                return userExits = true
            }
        })

        // only if true return userExits
        if (userExits) {
            return userExits
        }


         await registerAndLogin.query(`insert into login values ($1,$2,$3)`, [1, data.username, data.password])
        const seeTable = await registerAndLogin.query('SELECT * FROM login')
        console.table(seeTable.rows)

    }

    catch (err) {
        console.log(err)
    }

    finally {
        await registerAndLogin.end()
        console.log('finally')

    }

}


app.listen(3000)