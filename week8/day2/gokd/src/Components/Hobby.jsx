import React from 'react'

import PropTypes from 'prop-types'


class Hobby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <header>
    {this.props.text}
                </header>
            </div>
        )
    }
}

Hobby.propTypes = {
    name: PropTypes.string

}


export default Hobby



