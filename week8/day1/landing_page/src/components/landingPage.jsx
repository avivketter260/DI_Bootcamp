

import React, { Component } from 'react'
import Head from './Head'
import Main from './Main'
import Form from './Form'

export class LandingPage extends Component {
  
    render() {

        return (
            <div id="body">
                <Head />
                <Main />
                <Form />
            </div>
        )
    }

}



export default LandingPage