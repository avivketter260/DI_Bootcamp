import React, { Component } from 'react'

export class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: this.props.input,
            task: this.props.task
        }

        this.remove = this.remove.bind(this)
    }


    remove(e) {
        let allTask = document.querySelectorAll('.task')
        console.log(e.target.dataset.id)
        let newArr = [...this.props.task]
        allTask.forEach(item => {
            console.log(item.value)
            if (item.dataset.id === e.target.dataset.id) item.remove()

        })



    }




    render() {
        const input = this.props.input
        const task = this.props.task
        console.log(input)
        console.log(task)
        const toodList = task ? task : null
        if (!toodList) {
            return (

                <div className="app">
                    <h1 style={{ textAlign: "center" }}>Todo's</h1>
                </div>
            )

        }
        console.log(toodList)
        return (
            <div className='App' >
                <h1>Todo's</h1>
                {
                    toodList.map((task, i) => {
                        return <div data-id={i} className="task">{task} <a data-id={i} style={{ float: 'right' }} onClick={this.remove}>X</a></div>
                    })
                }

            </div>

        )
    }
}

export default List
