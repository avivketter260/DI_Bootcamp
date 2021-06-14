import React, { Component } from 'react'
import QuotesDatabase from './QuotesDatabase'
export class Quote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allQuotes: [],
            oneQuote: null,
            style: 'main-quote'

      
        }
    }
    componentDidMount() {
        this.setState({
            allQuotes: QuotesDatabase,
            oneQuote :QuotesDatabase[0]

        })
    }

    render() {

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }


        const handelClick = () => {
            if (this.state.allQuotes.length < 0) return
         
            const allLength = this.state.allQuotes.length - 1
            const randomNumber = getRandomInt(allLength)
            const all = this.state.allQuotes
            let randomQuote = all[randomNumber]
            console.log(randomQuote)
       this.setState({
           oneQuote: randomQuote,
           style: 'main-quote'
       })
           
        }

if(this.state.oneQuote){
    console.log(this.state.oneQuote)
    return (
        <div id="body">
            <div className="containert">
                <div className={this.state.style}>
                    <h1 className="animation">{ this.state.oneQuote.quote}</h1>
                </div>
                <div className="author">
                    <span>- {this.state.oneQuote.author?this.state.oneQuote.author:'Unknown' } -</span>
                </div>
                <button onClick={handelClick}>New quote
                </button>
            </div>
        </div>
    )
}
        return (
            <div >

            </div>
        )
    }
}

export default Quote
