const exp = require('express');
const bp = require('body-parser');

const app = exp()

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
 
app.use(bp.json())
 

//
app.use('/',exp.static(__dirname+'/public'))

app.route('/login')
.get((req,res)=>{
console.log(req.query)
console.log(':)')
res.send({'heel':'eee'})
})
.post((req,res)=>{
    console.log(req.body)
})

app.listen(3000)

