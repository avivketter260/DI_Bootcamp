import React from 'react';



class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    componentWillUnmount() {
        console.log('componentWillUnmount')
            alert('ok')
}


    render() {
        
        
        // this.setState({ show: this.props.state })
        return (
            <div>
                <h1 id='h1'>Hello World</h1>
            </div>
        )
    }

}
export default Child
