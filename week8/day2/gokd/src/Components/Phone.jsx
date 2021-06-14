import React from 'react'

import PropTypes from 'prop-types'


class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyname:'My phone is Samsung',
            color: 'black'
        }
    }

    render() {
        const changeColor= ()=>{
this.setState({color:'blue'})
        }
        return (
            <div>
                <header>
               <h1>{this.state.propertyname}</h1>
               <p> It is {this.state.color} Galaxy s20 from 2020</p>
               <button onClick={changeColor}>Change Phone Color</button>
                </header>
            </div> 
        )
    }
}

Phone.propTypes = {
    name: PropTypes.string

}


export default Phone



