/*
Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
Add an event listener which will hide the h3 when it’s clicked on (use the display property).
Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
When the “Submit” button of the form is clicked:
get the values of the input tags
make sure that they are not empty,
then append them to a HTML table, in the div, below the form.
When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
 */

const changeTheArticle = () => {
    let lastP = document.getElementsByTagName('p')[3];
    lastP.remove();
    let h2 = document.getElementsByTagName('h2')[0];
    h2.addEventListener('click', function () {
        h2.style.background = 'red';
    });
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.fontSize = `${getRndInteger(0, 101)}px`;

    let h3 = document.getElementsByTagName('h3')[0];
    h3.addEventListener('click', function () {
        h3.style.display = 'none';
    });
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('make all text bold'));
    document.body.appendChild(button);
    let allP = document.querySelectorAll('p');
    button.addEventListener('click', function () {
        for (let i of allP) {
            i.style.fontWeight = 'bold';
        }
    })


    let submit = document.querySelectorAll('input')[2]
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e)
        let value = document.querySelectorAll('input')
        for (let i of value) {
            if (i.value === 'Submit' || i.value.length < 0) break;
            let div = document.querySelector('div');
            let table = document.createElement('table')
            div.appendChild(table)
            table.appendChild(document.createTextNode(i.value));
            console.log(div)



        }
    }) 
allP[1].addEventListener('mouseover',()=>{
    allP[1].style.opacity=0;
    allP[1].style.transition='opacity 2s';
})


}
changeTheArticle()


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}