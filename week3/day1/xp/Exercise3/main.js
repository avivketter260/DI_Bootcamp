/*
For the following exercise use the HTML presented above:

Add a “light blue” background color and some padding to the <div>.
Do not display the first name (John) in the list.
Add a border to the second name (Pete).
Change the font size of the whole body.
Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

const userAndStyle = () => {
    let div = document.getElementsByTagName('div')[0];
    div.style.background = 'lightblue'
    div.style.padding = ''
    let john = document.getElementsByTagName('li')[0]
    john.style.display = 'none';
    let pete = document.getElementsByTagName('li')[1]
    pete.style.border = "thick solid #0000FF";
    let body = document.body.style.fontSize = '30px';
    if (div.style.background === 'lightblue') {
        console.log(`Hello ${john.textContent} and ${pete.textContent}`)
    }

}
userAndStyle()