// Exercise 3 : Create A Shopping List
// Instructions
// For this exercise, you need to work on your js file.
// The one and only element on your HTML file should be:

// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, 
//then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.
let shoppingList = [];

let div = document.querySelector('#root');
div.innerHTML += `<form> <input  type="text" name="add-list" id="add" >`;
div.innerHTML += `<button value='submit' onclick="addItem()">AddItem</button> `;
div.innerHTML += `<button value='submit' onclick="clearAll()">ClearAll</button> </form>`
let input = document.getElementById('add')
const addItem = () => {
    shoppingList.push(input.value)
    console.log(shoppingList)
}
const clearAll = () => {
shoppingList.splice(0,shoppingList.length)
console.log(shoppingList)

} 