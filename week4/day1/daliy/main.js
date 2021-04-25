/*Create an array using forEach that contains all the 
usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
Create an array using forEach that contains the usernames of all players
 with a score bigger than 5.
Tip: Use the ternary operator
Find and display the total score of the users.
*/

const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


const goWildcats = () => {
    let names = []
    let namesAndScore = []
    let totalScore=0;
    gameInfo.forEach((name) => {
        return names.push(name.username + '!')

    })
    console.log(names)
    gameInfo.forEach((name) => {
       return  name.score > 5 ? namesAndScore.push(`player name: ${name.username} player score: ${name.score} `):''
       

    })

    console.log(namesAndScore)

    gameInfo.forEach((name) => {
        totalScore += name.score
        return totalScore

    })
    console.log(totalScore)
}


goWildcats()