// Instructions
// Create a function that takes in two strings as two parameters and returns a
//  boolean that indicates whether or not the first string is an anagram of the second string.

// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

const anagrams = (str, str2) => {
    let string = str.toLowerCase().split('')
    let string2 = str2.toLowerCase().split('')
    let reslut = true;

    string.filter((item) => {
        if (!(string2.find(e => e === item))) {
            reslut = false;
        } 
    })
    return reslut
}
console.log(anagrams("The Morse Code", "Here come dots"))