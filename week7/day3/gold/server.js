const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const app = express()
app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())

let id = 1
let shopingList = []

//GET /items - this should respond with a list of shopping items.

app.route('/items')
    .get((req, res) => {
        console.log(':)')
        const userJson = fs.readFileSync('./shopingList.txt')
        let userJsonStrimg = userJson.toString()
        console.log(userJsonStrimg)
        shopingList = JSON.parse(userJsonStrimg)
        console.log(shopingList)
        res.send(shopingList)
    })
    .post((req, res) => {
        console.log(':D')

    })
//GET /items/:id - this route should display a single item’s name and price

app.route('/items/:id')
    .get((req, res) => {
        console.log(':)')
        // console.log(req.params.id)
        for (let i of shopingList) {
            if (i.id === parseInt(req.params.id)) {
                res.send(`<p>Item name: ${i.item}</p> <p>Item price: ${i.price}</p>`)
            }
        }

    })
    .post((req, res) => {
        console.log(':D')

    })
//POST /item - this route should accept form data and add it to the shopping list. (ie. add it to the array)


fs.writeFile('./shopingList.txt', JSON.stringify(shopingList), function (err) {
    if (err) return console.log(err);

});

app.route('/item')
    .get((req, res) => {
    })


    .post((req, res) => {
        console.log(':D')
        let shopingList = []
        const userJson = fs.readFileSync('./shopingList.txt')
        let userJsonStrimg = userJson.toString()
        console.log(userJsonStrimg)
        shopingList = JSON.parse(userJsonStrimg)
        console.log(shopingList)
        shopingList.push({
            id: id,
            item: req.body.name,
            price: req.body.price
        })
        fs.writeFile('./shopingList.txt', JSON.stringify(shopingList), function (err) {
            if (err) return console.log(err);
            console.log(req.body.name + 'is saved');
        });
        console.log(shopingList)
        console.log(':D')

        id++

    })


app.listen(3001)
