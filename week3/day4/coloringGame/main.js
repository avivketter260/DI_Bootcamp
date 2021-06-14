let color;
let mousedown = false;
// get the body document
let body = document.getElementsByTagName("body")[0];
// all the elements in the sidebar class button and colors sidebar > * = all the children in sidebar
let colorBlocks = document.querySelectorAll(".sidebar > *");
// all the empty block 
let main = document.querySelector(".main ");
let clearButton = document.getElementsByTagName("button")[0];

for (let i = 0; i <= 1030; i++) {
    let creatEmptyBlock = document.createElement('div');
    main.appendChild(creatEmptyBlock);
}
let emptyBlock = document.querySelectorAll(".main > *");
console.log(emptyBlock)

clearButton.addEventListener("click", function () {
    for (let block of emptyBlock) {
        block.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function () {
    mousedown = true;
})

body.addEventListener("mouseup", function () {
    mousedown = false;
})


for (let colorBlock of colorBlocks) {
    colorBlock.addEventListener("click", function (event) {
        color = event.target.style.backgroundColor;
    });
}

for (let fillBlock of emptyBlock) {
    fillBlock.addEventListener("mousedown", function (event) {
        if (color != null) event.target.style.backgroundColor = color;
    });

    fillBlock.addEventListener("mouseover", function (event) {
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}



// let background;
// function selected (event) {
//     for (let i=0; i < color.length; i++) {
        
//         if (color[i].classList.contains('selected')) {
//             color[i].classList.remove('selected')
//         }
//     }
//         event.target.classList.toggle('selected')
//         let style = getComputedStyle(event.target)
//         background = style.backgroundColor;
      
// }