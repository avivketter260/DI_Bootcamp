const box = document.createElement('div')
const body = document.querySelector('body')
let allBox
box.setAttribute('class', 'box')
body.appendChild(box)
let todo = []
let locationn = -540;
let x = 20
// All dayes
const sunday = document.querySelector('.sunday')
const monday = document.querySelector('.monday')
const tuesday = document.querySelector('.tuesday')
const wednesday = document.querySelector('.wednesday')
const thursday = document.querySelector('.thursday')
const friday = document.querySelector('.friday')
const saturday = document.querySelector('.saturday')

const hideTaskDiv = () => {
    document.querySelector('.add_task').style.display = "none";

    if (window.localStorage.length > 0) {
        let objFromLocalStorage = window.localStorage.getItem('todo');
        todo = JSON.parse(objFromLocalStorage)
        todo.forEach(task => {
            return task.done = false
        })
        todoListState()
    }

}

const showAddTask = () => {
    document.querySelector('.add_task').style.display = "block";
    document.querySelector('.dayes').style.display = "none";
    document.querySelector('.task').style.display = "none";


}
const AddTask = () => {
    [task, start, end] = getValueFromInput();
    // let randomColor = generateRandomColor()
    if (!task || !start || !end) return
    todo.push({
        task: task,
        start: start,
        end: end,
        color: generateRandomColor(),
        done: false
    })
    console.log(todo)

    document.querySelector('.add_task').style.display = "none";
    document.querySelector('.dayes').style.display = "flex";
    todoListState()

}

const getValueFromInput = () => {
    const task = document.querySelector('#name').value
    const start = document.querySelector('#start').value;
    const end = document.querySelector('#end').value
    document.querySelector('#name').value = ''

    return [task, start, end]
}

/// create random color function 
const todoListState = () => {

    todo.forEach(task => {
        if (task.done) return
        task.done = true;
        if (task.start.toLowerCase() === 'sunday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '118px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
            if (task.end.toLowerCase() === 'monday') newDiv.style.width = '301px';
            if (task.end.toLowerCase() === 'tuesday') newDiv.style.width = '462px';
            if (task.end.toLowerCase() === 'wednesday') newDiv.style.width = '625px';
            if (task.end.toLowerCase() === 'thursday') newDiv.style.width = '793px';
            if (task.end.toLowerCase() === 'friday') newDiv.style.width = '956px';
            if (task.end.toLowerCase() === 'saturday') newDiv.style.width = '1101px';

        } else if (task.start.toLowerCase() === 'monday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '260px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
            if (task.end.toLowerCase() === 'tuesday') newDiv.style.width = '314px';
            if (task.end.toLowerCase() === 'wednesday') newDiv.style.width = '485px';
            if (task.end.toLowerCase() === 'thursday') newDiv.style.width = '651px';
            if (task.end.toLowerCase() === 'friday') newDiv.style.width = '816px';
            if (task.end.toLowerCase() === 'saturday') newDiv.style.width = '958px';


        } else if (task.start.toLowerCase() === 'tuesday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '424px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
            if (task.end.toLowerCase() === 'wednesday') newDiv.style.width = '323px';
            if (task.end.toLowerCase() === 'thursday') newDiv.style.width = '480px';
            if (task.end.toLowerCase() === 'friday') newDiv.style.width = '641px';
            if (task.end.toLowerCase() === 'saturday') newDiv.style.width = '760px';


        } else if (task.start.toLowerCase() === 'wednesday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '585px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
            if (task.end.toLowerCase() === 'thursday') newDiv.style.width = '325px';
            if (task.end.toLowerCase() === 'friday') newDiv.style.width = '487px';
            if (task.end.toLowerCase() === 'saturday') newDiv.style.width = '640px';

        } else if (task.start.toLowerCase() === 'thursday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '750px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
            if (task.end.toLowerCase() === 'friday') newDiv.style.width = '324px';
            if (task.end.toLowerCase() === 'saturday') newDiv.style.width = '480px';

        } else if (task.start.toLowerCase() === 'friday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '913px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
            if (task.end.toLowerCase() === 'saturday') newDiv.style.width = '345px';


        } else if (task.start.toLowerCase() === 'saturday') {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = ` &nbsp &nbsp${task.task}&nbsp &nbsp`
            newDiv.setAttribute('class', 'task')
            newDiv.style.width = '155px'
            let moveLocation = locationn === 0 ? locationn += x : locationn = -540
            newDiv.style.marginTop = `${moveLocation}px`// // -540
            newDiv.style.marginLeft = '1080px';
            newDiv.style.background = task.color
            box.appendChild(newDiv)
            locationn = 0
            x += 1
        }

    })
    document.querySelector('.task').style.display = "flex";
    allTask = document.querySelectorAll('.task')
    localStorage()

    let allBox = document.querySelectorAll('.task')
    allBox.forEach((task) => { task.addEventListener('click', editTask) })
    
}


function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const localStorage = () => {
    let obj = JSON.stringify(todo);
    window.localStorage.setItem('todo', obj)
}

const cleanTasks = () => {
    if (todo.length > 0) {
        todo = [];
        let removeData = document.querySelectorAll('.task')
        removeData.forEach(task => {
            task.remove()
        })
        locationn = -540;
        x = 20
    }
    window.localStorage.removeItem('todo')
}


function editTask (){
    console.log(this.style.cssText)
    this.style.cssText += 'text-decoration: line-through'
    setTimeout(() => {
        this.remove()
    }, 700);
}

setInterval(() => {
     allBox = document.querySelectorAll('.task')
}, 1000);
allBox.forEach((task) => { task.addEventListener('dblclick', editTask) })
