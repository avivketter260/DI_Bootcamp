const express = require('express');
const app = express()
const fs = require('fs')
const bp = require('body-parser');
const path = require('path');
const cors = require('cors');
app.use(cors());

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

// app.use('/static', express.static('public'))



app.route('/register')
    .get((req, res) => {
        console.log('get')
        let data = []
        const listJson = fs.readFileSync('./users')
        let listJsonStrimg = listJson.toString()
        data = JSON.parse(listJsonStrimg)
        res.send(data)

    })

    .post((req, res) => {
        console.log('post...')

        console.log(req.body)
        
        
        let data;
        const listJson = fs.readFileSync('./users')
        let listJsonStrimg = listJson.toString()
        data = JSON.parse(listJsonStrimg)
        console.log(data)
        data.push(req.body)
        fs.writeFile('./users', JSON.stringify(data), function (err) {
            if (err) return console.log(err);
        });

        
    })



app.route('/login')
    .get((req, res) => {
        console.log('get')
        let data = []
        const listJson = fs.readFileSync('./users')
        let listJsonStrimg = listJson.toString()
        data = JSON.parse(listJsonStrimg)
        res.send(data)
    })

    .post((req, res) => {
        console.log('post...')
    
       
    });





app.listen(3000)
