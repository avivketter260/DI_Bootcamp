

const makeJson = () => {
    let form = document.getElementById('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
    })

    const userVal = document.forms.form.username.value;
    const lastnameVal = document.forms.form.lastname.value;
    let objJson = makeObjectToJson(userVal,lastnameVal)
    console.log(objJson);
    let createheadeOne=document.createElement('h1');
    createheadeOne.innerHTML=objJson;
    document.body.appendChild(createheadeOne);
    document.forms.form.username.value='';
    document.forms.form.lastname.value='';
}




const makeObjectToJson = (name,lastname)=>{
    let obj = {
        name: name,
        lastname:lastname
    };
    let objJson = JSON.stringify(obj);

    return objJson
}