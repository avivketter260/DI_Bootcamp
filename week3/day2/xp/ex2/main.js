/*
Create a function called getBold_items() that takes no parameter. This function should collect all
 the bold items inside the paragraph.
Create a function called highlight() that changes the color of all the bold text to blue.
Create a function called return_normal() that changes the color of all the bold text back to black.
Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), 
and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example */


const getBold_items = () => {
    let boldText = document.querySelectorAll('strong');
    console.log(boldText);
    boldText[0].addEventListener('mouseover', highlight);
    boldText[0].addEventListener('mouseout', return_normal);


}

const highlight = () => {
    console.log('work')
    let boldText = document.querySelectorAll('strong');
    for (let i in boldText) {
        i = parseInt(i);
        if (isNaN(i)) return;
        boldText[i].style.color = 'blue'
    }
}

const return_normal = () => {
    let boldText = document.querySelectorAll('strong');
    for (let i in boldText) {
        i = parseInt(i);
        if (isNaN(i)) return;
        boldText[i].style.color = 'black';
    }
}
getBold_items();