import React, { Component } from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        this.tick = this.tick.bind(this)
    }


    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick() {

        this.setState({
            date: new Date()

        })
    }

    render() {

        console.log(new Date().toLocaleTimeString())
        return (
            <div>
                <h1>Hello!</h1>
                <h4>it is {this.state.date.toLocaleTimeString()} {this.state.date > 12 ? 'PM' : 'AM'}.</h4>
            </div>


        )
    }



}








export default Clock
