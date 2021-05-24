const http = require('http');

//Exercise 1 : HTTP
// http.createServer(function (req, res) {
//   res.write('<h1>aviv</h1>'); 
//   res.write('<h1>ketter</h1>'); 
//   res.write('<h1>yea</h1>'); 
//   res.end(); 
// }).listen(3001);

const user = {
    firstname: 'John',
    lastname: 'Doe'
}
http.createServer(function (req, res) {
  res.write(JSON.stringify(user)); 
  res.end(); 
}).listen(8080);