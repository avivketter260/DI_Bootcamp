// const { address } = require('faker')
const faker = require('faker')
const prompt = require('prompt');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties


// Create a function that adds objects to the users array. 
// Each user has the properties: name, address street, country. Use faker to populate them with fake data.
// faker.name.findName()  faker.adress.streetAddress()  faker.adress.country() 
let users = []


// const allUsers = (()=>{
//     for(let i=0; i< 6; i++){
    //         users.push({
        //             name: faker.name.findName(),
//             address_street :faker.address.streetAddress(),
//             country: faker.address.country() 
//         })
//     }
// })()
// console.log(users)


prompt.start();




prompt.get(['name', 'address', 'country'], function (err, result) {
    if (err) { return onErr(err); }
    console.log(`Type your name ${result.name}`)
    let name = result.name
    console.log(`Type your address ${result.address}`)
    let address = result.address
    console.log(`Type your country ${result.country}`)
    let country = result.country
    allUsers(name, address, country)


});

function onErr(err) {
    console.log(err);
    return 1;
}

const allUsers = (name, address, country) => {
    users.push({
        name: name,
        address_street: address,
        country: country
    })
    console.log(users)

}



