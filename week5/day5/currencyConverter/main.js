//elements / Global var
const select = document.querySelectorAll('.select')
const btn = document.querySelector('#btn')
const amount = document.querySelector('input')
let amountState;
let getSelecetValueFrom;
let getSelecetValueTo;
let fromCurrencyState;
let toCurrencyState;


const displyAllContry = (async () => {
    const url = 'http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1'
    const getData = await fetch(url);
    const showData = getData.json()
    return showData
})().then(res => {
    console.log(res)
    for (i in res.currencies) {
        select[0].innerHTML += `<option value=${res.currencies[i]}>${res.currencies[i]}</option>`;
        select[1].innerHTML += `<option value=${res.currencies[i]}>${res.currencies[i]}</option>`;
    }
    return res
}).then(res => {
    btn.addEventListener('click', () => {
        console.log('Values Change')
        getSelecetValueFrom = select[0].value
        getSelecetValueTo = select[1].value
        amountState = amount.value;
    })
    return res
}).then(res => {
    setInterval(() => {
        for (let i in res.currencies) {
            let splitString = res.currencies[i].split(' ')
            let check1 = splitString.find(item => { if (item === getSelecetValueFrom) return true })
            let check2 = splitString.find(item => { if (item === getSelecetValueTo) return true })
            if (check1) {
                fromCurrencyState = i;
            }
            if (check2) {
                toCurrencyState = i
                break;
            }
        }
    }, 1000);
})

    .catch(err => console.log(err))

// setInterval(() => {

// }, 1000);
const findAmount = async () => {
    if (!(fromCurrencyState) || !(toCurrencyState) || !(amountState)) return
    const url = `https://api.currencylayer.com/convert?from=${fromCurrencyState}&to=${toCurrencyState}&amount=${amountState}`
    const getData = await fetch(url);
    const showData = getData.json()
    return showData
}

findAmount()
    .then(res => {
        console.log(res)
    })
    .catch(err => { console.log(err) })