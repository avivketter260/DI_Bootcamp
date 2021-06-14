let listTasks = [];
let btn = document.querySelector('#btn')
let userInput = document.querySelector('input');
let divListTasks = document.querySelector('.listTasks');
let id = 0;
btn.addEventListener('click', e => {
    e.preventDefault()
    let userValue = userInput.value;
    if (!userValue) return;


    listTasks.push({
        id: id,
        text: userValue,
        done: false
    });


    id++
    document.querySelector('input').value = '';
    divListTasks.innerHTML += `<div class='todo'><input type="checkbox" class="messageCheckbox" data-task-id="${id}">${listTasks[listTasks.length - 1].text}<i onclick="deleteTask()" class="fas fa-times" ></i> </div><br>`;
    console.log(divListTasks);

    setInterval(() => {

        let checkedValue = null;
        let inputElements = document.getElementsByClassName('messageCheckbox');
        for (let i = 0; inputElements[i]; ++i) {
            // console.log(inputElements[i])
            // console.log(inputElements[i].value)
            if (inputElements[i].checked) {
                checkedValue = inputElements[i];
                listTasks[i].done = true
                console.log( listTasks[i])
               

                break;
            }
        }

    }, 1000)
    


})

