// Exercise 1 : Building Management

// Console.log the number of levels in the building.

// Console.log how many apartments are on levels 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.

// If it is than increase Dan’s rent.




let building = {
    number_levels: 4,
    number_of_apt_by_level: {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants: ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent: {
        "Sarah": [3, 990],
        "Dan": [4, 1000],
        "David": [1, 500],
    },
}
// Console.log the number of levels in the building.
console.log(building["number_levels"]);

// Console.log how many apartments are on levels 1 and 3.
console.log(building.number_of_apt_by_level["1"], building.number_of_apt_by_level["3"])

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.name_of_tenants[1], building.number_of_rooms_and_rent["Dan"][0])

// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.

let sarahRent = building.number_of_rooms_and_rent["Sarah"][1];
let davidRent = building.number_of_rooms_and_rent["David"][1];
let danRent = building.number_of_rooms_and_rent["Dan"][1];

let rentChack = sarahRent + davidRent > davidRent ? console.log(`yes the total of Shara and Dan is ${sarahRent + davidRent} and Dan is ${danRent}`) :
    console.log(`no the total of Shara and Dan is ${sarahRent + davidRent} and Dan is ${danRent}`);

// If it is than increase Dan’s rent.
let newDanRent = danRent + 500
console.log('new rent '+ newDanRent)

// Exercise 2 : Divisible By Three
// Instructions
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log “true” or “false”.
let numbers = [123, 8409, 100053, 333333333, 7];

// for (let number in numbers) {
//     if (numbers[number] % 3 === 0) {
//         console.log('yes')
//     }else console.log('no')
// }



// Requirements : Don’t use built-in Javascript methods to answer the following questions. 
//You have to create the logic by yourself. Use simple for and while loops.
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the largest age in the array.
let age = [20, 5, 12, 43, 98, 55];
let indexOfAge = 0;
let sum = 0;
while (indexOfAge < age.length) {
    sum += age[indexOfAge]
    indexOfAge++
}
console.log(sum)
let biggest = 0;
let counter = 0
for (let i = 0; i < age.length; i++) {
    if (age[i] > age[i + 1]) {
        counter = age[i]
    } else counter = age[i + 1]
    biggest = counter > biggest ? counter : biggest
}
console.log(biggest)
