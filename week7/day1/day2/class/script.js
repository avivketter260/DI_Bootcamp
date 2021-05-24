const fs = require('fs')

// fs.readFile('/.data.txt',(err,data)=>{
//     if (err) return console.log(err)

//     console.log(JSON.parse(data.toString()))
// })

// const data =fs.readFileSync ('./data.text') 
// let res = JSON.parse(data.toString())
// console.log(res[0].name)
// console.log(res[0].lastName)
// console.log('sucsess')


// let numbers = '1 2 3 4 5';
// fs.appendFile('./data.text', numbers ,(err)=>{

// })

// let data = 'aviv is the best';
// fs.writeFile('./one',data , err=>{
//     if (err) return console.log(err)
// })

 // delete 
fs.unlink('./data1.text',err=>{
    if(err) return console.log(err)
})


//copy

// fs.copyFile('./data.text','./data1.text',err=>{
//     if(err) return console.log(err)
// })
