import React from 'react'
  
import PropTypes from 'prop-types'
import Garage from './Garage'

class Car extends React.Component {
  constructor(props){
      super()
      this.state={
          size:'small'
      }
  }

    render() {
        return (
            <div>
                <Garage size={this.state.size}/>
            </div>
        )
    }
}

Car.propTypes={
    name: PropTypes.string
 
}


export default Car



