//require
const main = require('./main.js')
const http = require('http');



const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(main.getDateAndTime());
}

const server = http.createServer(requestListener);
server.listen(3002);
console.log('listenig....')
