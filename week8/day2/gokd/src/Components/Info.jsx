import React from 'react'

import PropTypes from 'prop-types'


class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <header>
             <h3>I am {this.props.model}</h3>
                </header>
            </div>
        )
    }
}

Info.propTypes = {
    name: PropTypes.string

}


export default Info



