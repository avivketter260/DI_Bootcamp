const a = require('./server.js')

a.getData().then(res =>console.log(res.forEach(item =>console.log(item.username))))
