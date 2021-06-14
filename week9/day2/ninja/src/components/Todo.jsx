import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddTask, active, all } from '../action/index'




const allTask = []
const Todo = () => {
    const task = useSelector(state => state.task)
    const showActive = useSelector(state => state.active)
    const dispatch = useDispatch()


    const handelSubmit = (e) => {
        e.preventDefault()
        const inputVal = e.target.input.value;
        if (inputVal == '') return
        allTask.push({
            task: inputVal,
            active: false
        })
        dispatch(AddTask(allTask))
        e.target.input.value = ''
    }

    const done = (e) => {
        e.target.style.color = 'red'
        e.target.style.textDecorationLine = 'line-through'
        task.forEach(res => {
            if (res.task === e.target.dataset.task) {
                return res.active = true
            }
        })
    }

    const oneForAll = (e) => {
        const buttonType = e.target.name

        let x = document.querySelectorAll('button')[2]

        if (buttonType === 'All') {
            console.log('This is All')
            console.log(e)

            e.target.classList.add('btn_canceld')
            x.classList.add('btn')

            dispatch(all())
        }
        if (buttonType === 'Active') {
            console.log('This is Active')
            e.target.classList.add('btn_canceld')

            dispatch(active())

        }
        if (buttonType === 'Complited') {
            console.log('This is Complited')
            const temp = document.querySelectorAll('li')
            temp.forEach(res => res.remove())

        }

    }


    return (
        <div>
            <h1>TODO </h1>
            <form onSubmit={handelSubmit}>

                <input name='input' type="text" placeholder="New Task..." />
                <button type="submit" >Add Task</button>
                <ul>
                    {task.map((item, i) => {
                        if (showActive) {
                            if (!item.active) {
                                return <li style={{ cursor: 'pointer' }} data-task={item.task} key={i} name={item.task} onClick={done}>{item.task}</li>

                            }
                        } else {
                            return <li style={{ cursor: 'pointer' }} data-task={item.task} key={i} name={item.task} onClick={done}>{item.task}</li>

                        }

                    })}
                </ul>
            </form>
show: &nbsp;&nbsp;
            <button name="All" className="btn" onClick={oneForAll}>All</button>&nbsp;&nbsp;
            <button name="Active"  className="btn" onClick={oneForAll}>Active</button>&nbsp;&nbsp;
            <button name="Complited" onClick={oneForAll}>Complited</button>&nbsp;&nbsp;
        </div>
    )
}
export default Todo