
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]‏
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const sortWord = (result) => {
    return new Promise((resolve, reject) => {
        if (result) {
            resolve(result.sort())
        }
        reject('error')

    })
}

const makeAllCaps = (arr) => {
    let newArr = []
    return new Promise((resolve, reject) => {
        for (let word of arr) {
            if (typeof word === 'string') {
                newArr.push(word.toUpperCase())
            } else reject('Not a string')

            resolve(newArr)
        }
    })
}
makeAllCaps(arrayOfWords)
.then((result=>{return sortWord(result)}))
.then((result=>{console.log(result)}))
