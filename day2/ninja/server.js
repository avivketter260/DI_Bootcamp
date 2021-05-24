const express = require('express')
const bp = require('body-parser');
const app = express()
app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())

let id = 1
let shopingList = []
//GET /items - this should respond with a list of shopping items.

app.route('/items')
    .get((req, res) => {
        console.log(':)')
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
            if (i.id ===parseInt(req.params.id)) {
                res.send(`<p>Item name: ${i.item}</p> <p>Item price: ${i.price}</p>`)
            }
        }

    })
    .post((req, res) => {
        console.log(':D')

    })
//POST /item - this route should accept form data and add it to the shopping list. (ie. add it to the array)

app.route('/item')
    .get((req, res) => {
    })
    .post((req, res) => {
        console.log(':D')
        shopingList.push({
            id: id,
            item: req.body.name,
            price: req.body.price
        })
console.log(shopingList)
        id++

    })


app.listen(3001)
