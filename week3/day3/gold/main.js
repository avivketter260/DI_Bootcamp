// Create multiple squares/boxes with letters inside.
// There should be 26 squares/boxes for all the letters 
//(A to Z) next to each other.
// Make all the squares draggable.
// You should be able to drag and drop the letters
// depending on their coordinates x and y.
const squares = document.querySelectorAll('.alpha-bet');
squares[0].addEventListener('dragstart', dragStart);
squares[0].addEventListener('dragend', dragEnd);
function dragStart() {
    this.className += ' hold';
    setTimeout(() => { this.className = 'invisible'; }, 0)
}

function dragEnd() {
    this.className = 'alpha-bet'
    console.log('dragend')
}

for (const square of squares) {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', dragDrop);
}
function dragOver(e) {
    e.preventDefault();
    // this.className+=' hold'
    console.log('over')
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log(this)
    console.log('enter')

}
function dragLeave(e) {
    e.preventDefault();
    this.className = 'empty'
    console.log('leave')

}
function dragDrop(e) { 
    console.log(this)
    console.log('drop')
    this.className = 'empty'

    let x = e.clientX
    let y = e.clientY
    console.log(x)
    console.log(y)
    this.style.position = 'absolute';
    this.style.top = `${y}px`
    this.style.left = `${x}px`




}

