const Client = require('pg').Client
// -------------------------------------------------------------------------------------------------------------
/// new Client Class named clinet
const client = new Client({
    user: 'postgres', // my pg username
    password: '1234rewq',// my pg password
    host: 'localhost', // the host ip
    port: '5433',// the port pg is on
    database: "bootcamp"// the database
})
// ==
// const connectionString = 'postgressql://postgres:1234rewq@localhost:5433/bootcamp';user
// --------------------------------------------------------------------------------------
 //take data form pgSQL from bootcamp database the chein srtyle
client.connect() // return promise
.then(()=>console.log('conected')) // make suer is conected (IMPORTENT!!)
.then(()=>client.query('insert into students values ($1,$2,$3,$4)',[11,"Raviv",'Retter','Today'])) // ADD stuff a list
.then(()=>client.query('SELECT *  FROM students ')) // sql method
.then(res=>console.table(res.rows)) // the result 
.catch(err => console.log(err))// case of err
.finally(()=>client.end())// any way end the client (IMPORTENT!!)

//  //take data form pgSQL from bootcamp database the asyinc style

const dataFromAndInToSql = async () => {
    try {
        await client.connect()
        console.log('conected')
        await client.query('insert into students values ($1,$2,$3,$4)',[13,"Ben",'Banana','Today'])
        let result = await client.query('SELECT *  FROM students')
        console.table(result.rows)
    }
    catch (err) {
console.log(err)
    }
    finally {
  await client.end()
    }
}
dataFromAndInToSql()

// const connectionString = 'postgressql://postgres:1234rewq@localhost:5433/bootcamp';

// const client = new Client( {
//     connectionString:connectionString

// })
