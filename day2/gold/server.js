const express = require('express')
const bp = require('body-parser');
const app = express()
app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())
 



app.route('/')
.get((req, res) => {
    })
    .post((req, res) => {
    console.log(':D')
    console.log(req.body)

       res.send(req.body)
    })
    
    
    
    app.listen(3001)
    