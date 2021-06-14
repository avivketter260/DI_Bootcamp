let allNum = [];
let fromArrayToString;

const number = (num) => {
    allNum.push(num)
}


const operator = (operator) => {
    allNum.push(operator)
}



const equal = () => {
    fromArrayToString = allNum.join('');
    allNum.splice(0, allNum.length);
    let result = eval(fromArrayToString);
    console.log(result);
    return result;
}

const reset = () => {
    allNum.splice(0, allNum.length);

}


const clearOne = () => {
    allNum.pop();
}