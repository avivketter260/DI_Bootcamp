// Exercise 1 : Keyless Car
// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() 
//that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

const checkDriverAge = (age) => {
    const checkDriver = age > 18 ? alert("You are old enough to drive, Powering On. Enjoy the ride!") : age === 18 ?
        alert("Congratulations on your first year of driving. Enjoy the ride!") : alert("Sorry, you are too young to drive this car.Powering off");
    return checkDriver
}
// checkDriverAge(19)




// Exercise 2 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// changeEnough([25, 20, 5, 0], 4.25) should return true,
//  since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50
//   which is bigger than 4.25 (the total amount due)

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
let Quarters = 0.25
let Dimes = 0.10
let Nickels = 0.05
let Pennies = 0.01

const changeEnough = (array, number) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        switch (i > -1) {
            case i == 0:
                sum += array[i] * Quarters
                break;
            case i == 1:
                sum += array[i] * Dimes
                break;
            case i == 2:
                sum += array[i] * Nickels
                break;
            case i == 3:
                sum += array[i] * Pennies
                break;

        }

    }
    let result = sum >= number ? true : false
    return result
}
// console.log(changeEnough([25, 20, 5, 0], 4.25));

// Exercise 3: Find The Multiples Of 23
// Instructions
// Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

const multiplesOf = (multiples) => {
    let sum = 0;
    let outcome = 0;
    for (let i = 1; multiples * i < 500; i++) {
        outcome = multiples * i;
        sum += outcome
    }
    return sum
}
// console.log(multiplesOf(23))

// Exercise 5 : Shopping List
// Instructions
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no arguments.

const shoppingList = ["banana", "orange", "apple"]

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// The function should return the total price of your shoppingList.
// In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

const myBill = () => {
    let sum = 0;
    for (let i of shoppingList) {
        if (i in stock) {
            stock[i] > 0 ? sum += prices[i] : console.log(`Sorry we out of ${i}`);
            stock[i] = stock[i] - 1
        }
    }
    return sum
}
// console.log(myBill())


// Exercise 4 : Amazon Shopping
// Instructions
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

const checkBasket = () => {
    let userAsk = prompt('Type an item');
    if (userAsk in amazonBasket) return alert(`${userAsk} is in the basket`)
    return alert(`${userAsk} is not in the basket`)
}
// checkBasket()


// Exercise 6 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

const tipCalculator = (bill) => {
    if (bill < 50) return bill * 0.2
    if (200 >= bill && bill >= 50) return bill * 0.15
    return bill * 0.1
}

const forJohn = (bill) => {
    let totalBill = tipCalculator(bill) + bill;
    return console.log(`the amount is ${bill} and the tip is ${tipCalculator(bill)} and total is ${totalBill}`)

}

// forJohn(40)




// Exercise 7 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotel_cost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called plane_ride_cost().
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user doesn’t answer or if the answer is not a string, ask again.
// Define a function called rental_car_cost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// Define a function called total_vacation_cost() 
//that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotel_cost(), plane_ride_cost() and rental_car_cost() inside the function total_vacation_cost.
// Call the function total_vacation_cost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the total_vacation_cost() function.

const hotel_cost = () => {
    let askNumOfNight = prompt('Type the number of nights you would like to stay in the hotel');
    let numberOfNights = parseInt(askNumOfNight);
    let roomForNight = 140;
    if (!(numberOfNights) || typeof numberOfNights !== 'number') {
        hotel_cost();
    }
    let totalPrice = numberOfNights * roomForNight;
    return totalPrice

}

const plane_ride_cost = () => {
    let userDestination = prompt(' Type destination London, Paris, alse... ');
    if (!(userDestination) || typeof userDestination !== 'string') {
        plane_ride_cost();
    }
    let destinations = {
        London: 183,
        Paris: 220,
        otherDestination: 300

    };
    let destinationCost;
    for (let destination in destinations) {

        return destinationCost = userDestination == 'London' ? destinations[destination] : userDestination == "Paris" ? destinations[destination] :
            userDestination[destinations];
    }
}

const rental_car_cost = () => {
    let askNumOfNight = prompt('Type the number of nights you would like to rent the car');
    let numberOfNights = parseInt(askNumOfNight);
    let carForDay = 40;
    if (!(numberOfNights) || typeof numberOfNights !== 'number') {
        rental_car_cost();
    }
    let totalPrice = numberOfNights > 10 ? (numberOfNights * carForDay) * 0.05 : numberOfNights * carForDay;
    return totalPrice;
}

const total_vacation_cost = () => {
    let total = hotel_cost() + plane_ride_cost() + rental_car_cost()
    return total;
}

console.log(total_vacation_cost())
