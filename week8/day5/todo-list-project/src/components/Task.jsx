import React, { Component } from 'react'
import List from './List'

export class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            task: null
        }
        this.handelChange = this.handelChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let taskList = []
        if (this.state.task) taskList = [...this.state.task]
        console.log(taskList)
        if (this.state.input === '') return
        taskList.push(this.state.input)
        this.setState({
            task: taskList
        })
        document.querySelector('input').value = ''

    }

    handelChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <List input={this.state.input} task={this.state.task} />
                <form onSubmit={this.handleSubmit}>
                    <label >Add a new todo</label>
                    <input onKeyPress={this.handelChange} type="text" />
                </form>
            </div>
        )
    }
}

export default Task
