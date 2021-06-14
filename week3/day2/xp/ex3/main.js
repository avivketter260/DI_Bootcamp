
const volume = () => {
    let rInput = document.querySelectorAll('input')[0]
    let submit = document.querySelectorAll('input')[2];
    let vInput = document.querySelectorAll('input')[1];
    submit.value
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        let radiuos = +rInput.value
        let result = calculate(radiuos)
        vInput.value = result
    })

}

const calculate = (r) => {
    let π = 3.1415;
    let v = (4 / 3) * π * r ** 3;
    return v
}
volume()