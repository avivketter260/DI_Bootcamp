// Create a file named main.js and create a function that returns the current date and time. Export the module.

module.exports.getDateAndTime = ()=>{
    return  new Date().toLocaleString();
}
