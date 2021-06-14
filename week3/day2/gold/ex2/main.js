//Create a function called : removecolor() that removes the selected color from the dropdown list.

const removecolor = () => {
    let removeBotton = document.querySelector('input');
    let list = document.querySelector('#colorSelect');
    console.log(removeBotton)
    let selectorColor = document.querySelectorAll('option')
    removeBotton.addEventListener('click', () => {
        console.log(list.selectedIndex)
        console.log(selectorColor[list.selectedIndex])
        selectorColor[list.selectedIndex].remove()


    })
}
removecolor()
