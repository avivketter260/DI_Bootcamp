const onlyLetters = () => {
    let inputValue = document.querySelectorAll('input')[0];
    inputValue.addEventListener('keydown', e => {

        if (e.shiftKey || e.ctrlKey || e.altKey) {
            e.preventDefault();

        } else {
            let key = e.keyCode;
            console.log(key)

            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

                e.preventDefault();

            }

        }
    })
}
onlyLetters()