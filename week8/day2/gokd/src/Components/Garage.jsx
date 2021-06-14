import React from 'react'

import PropTypes from 'prop-types'


class Garage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h3>Who lives in my {this.props.size} Garage?</h3>
                </header>
            </div>
        )
    }
}

Garage.propTypes = {
    name: PropTypes.string

}


export default Garage



