
const axios = require('axios')

module.exports.getData = async ()=>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data
    }
   catch (e){console.log(e)}
}
