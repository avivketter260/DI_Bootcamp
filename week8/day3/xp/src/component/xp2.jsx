import React from 'react';

import Child from './Child'

class FavoriteColor extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'red',
            change: true,
            show: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: 'yello'
            })
        }, 2000)

    }
    shouldComponentUpdate() {
        return this.state.change
    }

    componentDidUpdate() {
        let creatreDiv = document.querySelector('#addText')
        creatreDiv.innerHTML = `<h1>My Favorite Color is ${this.state.color}</h1>`

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const beforeUpDate = document.querySelector('#beforeUpDate')
        return beforeUpDate.innerHTML = `before yello my faviorite color was ${prevState.color} `
    }


    componentDidUpdate() {
        const messageFromDidUpdate = document.querySelector('#messageFromDidUpdate')
        messageFromDidUpdate.innerHTML = `But now is ${this.state.color}`
    }
  

    render() {
        const handelClick = () => {
            this.setState({
                color: 'blue'
            })

        }
        const handelClickPink = () => {
            this.setState({
                color: 'pink',
                change: false
            })
        

        }
        const deleteThis = ()=>{
            this.setState({
                show: false
            })
            // document.querySelector('#thisOne').style.display='none'
        }
        return (
            <div>
                <h1>My Favorite Color is {this.state.color}</h1>
                <button onClick={handelClick}>Blue Is Better</button>
                <button onClick={handelClickPink}>When you go Pink you nevet go back</button>

                <div id="addText"></div>
                <div id="beforeUpDate"></div>
                <div id="messageFromDidUpdate"></div>
                {this.state.show? <Child /> : null}
                <button id="thisOne" onClick={deleteThis}>Go Away</button>
            </div>
        )
    }
}

export default FavoriteColor
