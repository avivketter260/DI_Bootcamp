
const move = () => {


    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty')

    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
    console.log(empties)


    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }


    function dragStart() {
        this.className += ' hold';
        setTimeout(() => { this.className = 'invisible'; }, 0)
    }

    function dragEnd() {
        this.className = 'fill'
        console.log('dragend')
    }

    function dragOver(e) {
        // console.log('over')
        e.preventDefault();

    }

    function dragEnter(e) {
        e.preventDefault();
        console.log('enter')
        this.className += ' hovered';
    }

    function dragLeave(e) {
        this.className = 'empty';

    }

    function dragDrop(e) {
        this.className = 'empty';
        let x = e.clientX
        let y = e.clientY
        console.log(x)
        console.log(y)
        fill.style.position = 'absolute';
        fill.style.top = `${y}px`
        fill.style.left = `${x}px`
        this.append(fill)
    }


}
move()