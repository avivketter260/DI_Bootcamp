/*
Exercise 1 : My Book List
Instructions
Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

In the body of the HTML page, create an empty div:
<div class="listBooks"></div>
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
*/

const allBooks = [
    {
        title: ' Harry Potter',
        author: 'J. K. Rowling',
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408855652.jpg',
        alreadyRead: false
    },
    {
        title: " Game of thrones ",
        author: "George RR Martin's ",
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0074/9780007428540.jpg',
        alreadyRead: true
    },

];


const books = () => {
    let div = document.getElementsByClassName("listBooks")[0];
    let table = document.createElement('table');
    div.appendChild(table);
    table = document.getElementsByTagName('table')[0];
    console.log(table)
    let img = document.createElement('img');
    let img2 = document.createElement('img');
    for (let i in allBooks) {
        let h1 = document.createElement('h1');
        table.appendChild(h1);
        h1.appendChild(document.createTextNode(`${allBooks[i].title} written by ${allBooks[i].author}`));
        img.src = allBooks[0].image;
        img2.src = allBooks[1].image;
        table.appendChild(img2).style.width = '100px';
        table.appendChild(img).style.width = '100px';
        if (allBooks[i].alreadyRead) {
            h1.style.color = 'red'
        }
    }
}
books()


