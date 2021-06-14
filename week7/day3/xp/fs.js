const fs = require('fs')
//Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the 
// Node JS File System to read the text file and console.log the output in the terminal
fs.readFile('./xp1.txt', 'utf8' , (err, data) => {
  if (err) return  console.error(err)
  
  console.log(data)
})
//Create an fs.js file, and use the Node js File System to create a new text file and write to it.



// fs.writeFile('./xp2.txt', ('i made this'), err => {
//     if (err) return console.error(err)
      
    
    //file written successfully
//   })


//   Exercise 3 : Appending And Deleting Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)


fs.writeFile('./xp3.txt', ('i made this'), err => {
    if (err) return console.error(err)
})

fs.appendFile('./xp3.txt', ' this is append data', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

fs.unlink('./xp3.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});