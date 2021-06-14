
// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?
// A: in the broswer as : http://127.0.0.1:5501/index.html?user=sd&message=sdsd
                         // loaclhost       the Path(action url)    name and input value  (?=waiting for values, &= and)




// Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear?
//A : HTTP request



//Exercise 3 : JSON Mario
let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

//   Convert this JS object into a JSON object. What happens to the nested objects ? A: we now havre acsess to them;
const jsonMarioGame=JSON.stringify(marioGame) ;
// Convert and pretty print this JS object into a JSON object.
console.log(jsonMarioGame)
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
