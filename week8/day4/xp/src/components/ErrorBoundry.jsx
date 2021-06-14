import React, { Component } from 'react'
class ErrorBoundry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
        this.setState({
            hasError: true
        })
    }
    render() {
        const a = 1
        if (this.state.hasError) {
            return <h1>Oppsi!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry