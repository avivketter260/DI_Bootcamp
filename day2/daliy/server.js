const express = require('express')
const app = express()
const path = require('path');

const bp = require('body-parser');

// app.use('/',express.static(__dirname+'/public'))

app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())


app.route('/aboutMe/:hobby')
    .get((req, res) => {
        console.log(':)')
        if (typeof req.params !== 'string') res.status(404)
        res.send(req.params)
    })
    .post((req, res) => {
        // console.log(req.body)
    })


app.route('/pic')
    .get((req, res) => {
        console.log('pic route')
        res.sendFile(path.join(__dirname + '/public/pic.html'));

    })
    .post((req, res) => {
        console.log(req.body)
    })

app.route('/form')
    .get((req, res) => {
        console.log('form route')
        res.sendFile(path.join(__dirname + '/public/form.html'));
    })
    .post((req, res) => {
        console.log(req.body)
    })

    app.route('/formData')
    .get((req, res) => {
        console.log('formData route')
   
        console.log(`${req.query.userMail} sent you a message ${req.query.userMessage}` )
        console.log(req.query)
    })
    .post((req, res) => {
        console.log(req.body)   
    })



app.listen(3001)


