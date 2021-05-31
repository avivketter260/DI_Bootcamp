const fs = require('fs')
// Use the corresponding JavaScript operations to calculate the Total
//  Steps between right > and left < (The answer should be: 74 steps to the right)
// Use the corresponding JavaScript operations to calculate when 
// is the first time to reach the left side -1 (The answer should be: In step 1795 you reach the left side)


fs.readFile('./daliy.txt', 'utf8', (err, data) => {
    if (err) return console.error(err)

    console.log(data.split(''))
    let splitThisDarta = data.split('')
    let leftCount = 0;
    let leftStep = '<'
    let rightStep = '>'
    let rightCount = 0;
    for (let i of splitThisDarta) {
        courectStep = i
        if (i === leftStep) {
            rightCount++

        }
        if (i === rightStep) {
            leftCount++
        }

        
      
    }
    console.log(leftCount - rightCount)

})


fs.readFile('./daliy.txt', 'utf8', (err, data) => {
    if (err) return console.error(err)

    let splitThisDarta = data.split('')
    let leftCount = 0;
    let leftStep = '<'
    let rightStep = '>'
    let rightCount = 0;
    for (let i of splitThisDarta) {
        if (i === leftStep) {
            rightCount++

        }
        if (i === rightStep) {
            leftCount++
        }

        
        if (leftCount - rightCount === -1) {
            console.log(leftCount + rightCount)
            break;
        }
    }

})