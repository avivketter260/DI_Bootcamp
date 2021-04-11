// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order.
//  (Not alphabetical, but reverse the current Array i.e.
//      [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let x=fruits.slice(1,4)
x.sort()
x.push("Kiwi")
console.log(x)
let y =x.splice(1,4)
console.log(y)
y.reverse()
console.log(y)

//Exercise 2:
//Access and then console.log “Oranges”.
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let orange = moreFruits[1][1]
console.log(orange)