const moveRight = () => {
    console.log('click')

    var elem = document.getElementById("animate");
    let position = 0
    let leftAnfRight = 0
    let startMoveRight = setInterval(() => {
        if (position === 350) {
            leftAnfRight++
            clearInterval(startMoveRight)
            moveLeft()
        } else {
            position++
            elem.style.right = `${position}px`;
            elem.style.left = `${position}px`;
        }

    }, 5)


}

const moveLeft = () => {
    var elem = document.getElementById("animate");
    let position = 350;
    let startMoveLeft = setInterval(() => {
        if (position === 0) {
            clearInterval(startMoveLeft)
        } else {
            position--
            elem.style.right = `${position}px`;
            elem.style.left = `${position}px`;
        }
    }, 5)
}


//   let pos = 0;
//   let id = setInterval(function() {
//     if (pos == 350) {
//       clearInterval(id);
//     }
//     else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }, 5);