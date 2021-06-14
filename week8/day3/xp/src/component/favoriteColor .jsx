import React from 'react';



class FavoriteColor extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'red',
            change: true
        }
    }
    componentDidMount() {
        this.setState({
            color: 'yello'
        })
    }
    shouldComponentUpdate() {
        return this.state.change
    }


    render() {
        const handelClick = () => {
            this.setState({
                color: 'blue'
            })

        }
            const handelClickPink= ()=>{
                this.setState({
                    color:'pink',
                    change:false
                })

        }
        return (
            <div>
                <h1>My Favorite Color is {this.state.color}</h1>
                <button onClick={handelClick}>Blue Is Better</button>
                <button onClick={handelClickPink}>When you go Pink you nevet go back</button>
            </div>
        )
    }
}

export default FavoriteColor
