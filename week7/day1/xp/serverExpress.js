const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>tagit</h1>'))

app.listen(3001)