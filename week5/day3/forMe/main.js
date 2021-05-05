let notFalse = true
const p = new Promise((resolve, reject) => {
    if (notFalse) {
        return resolve('Aviv');
    }
    reject('Error');
})



.then((result) => {
    return result + ' Ke';
})
    .then((result) => {
        return result + 'tt';
    })
    .then((result) => {
        return result + 'er';
    })

    .then((result) => {
        console.log(result);
    })
.catch(err=>{console.log('in catch now '+err)})

