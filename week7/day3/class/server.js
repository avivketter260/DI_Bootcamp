const express = require('express')
const app = express()
const path = require('path');
const bp = require('body-parser');
const fs = require('fs');


app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())

// Create a new folder for your new server
// 2. Create server.js
// 3. Create index.html file in a public folder
// 4. Open your browser and go to http://localhost:5000
// and you should get your html file‏


app.route('/')
    .get((req, res) => {
        console.log(':)')
        res.sendFile(path.join(__dirname + '/public/index.html'));
    })
    .post((req, res) => {
        console.log(':D')

    })
// Save all names as a JSON file in your sever - use fs
// don't use append use write

app.route('/addUser')
    .get((req, res) => {
        console.log(':)')
        const userJson = fs.readFileSync('./user.txt')
        let userJsonStrimg = userJson.toString()
        let user = JSON.parse(userJsonStrimg)
        console.log(user)
       for (let i of user){
           console.log(i.name)
           res.send(`<h1>${i.name}</h1>`)
       }
    })
    .post((req, res) => {
        console.log(':D')
        console.log(req.body)
        let user = []
        const userJson = fs.readFileSync('./user.txt')
        let userJsonStrimg = userJson.toString()
        console.log(userJsonStrimg)
        user = JSON.parse(userJsonStrimg)
        console.log(user)
        user.push(req.body)
        fs.writeFile('./user.txt', JSON.stringify(user), function (err) {
            if (err) return console.log(err);
            console.log(req.body.name + 'is saved');
        });
    })

    app.route('/showUser')
    .get((req, res) => {
        console.log(':)')
        let user=[]
        const userJson = fs.readFileSync('./user.txt')
        let userJsonStrimg = userJson.toString()
         user = JSON.parse(userJsonStrimg)
        console.log(user)
       for (let i of user){
           console.log(i.name)
           res.send(`<h1>${i.name}</h1>`)
       }
    })
    .post((req, res) => {
        console.log(':D')
    
    })


app.listen(5000)
