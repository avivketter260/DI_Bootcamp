import React, { Component } from 'react'


export class BuggyCounter extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            conter:0
        }
        this.handleClick  = this.handleClick.bind(this)
    }
    
    handleClick (){
    let conter= this.state.conter
    console.log(conter)
    conter++
    this.setState({
        conter:conter
    })
    }

    render() {
        if (this.state.conter ===5){
          throw new Error ('Fail!!')
             
        }
        return (
            <div>
                <h1>{this.state.conter}</h1>
                <button type="submit" onClick ={this.handleClick }>Click Me Baby One More Time!</button>
            </div>
        )
    }
}

export default BuggyCounter
