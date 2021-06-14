import React from 'react'

import PropTypes from 'prop-types'
import 'tachyons/css/tachyons.min.css'


class Vote extends React.Component {
    constructor() {
        super()

        this.state = {
            language: [
                { lang: 'php', number: 0 },
                { lang: 'pyton', number: 0 },
                { lang: 'javaScript', number: 0 },
                { lang: 'java', number: 0 },
            ]

        }
    }

    render() {
        console.log(this.state.language)
        let allLang =  [...this.state.language]
        // allLang.forEach(item => {
        //     console.log(item)
        // })

      
        console.log(allLang)
        function VoteForThis(Computerlang) {
            let nameVal = Computerlang.target.attributes[1].value
            allLang.map(item => {
                console.log(nameVal)
                // console.log(item.number)
                console.log(item.lang)
                if (item.lang === nameVal) {
                    item.number++

                }
                return item
            })
            thisState(allLang)

        }

        const thisState = (allLang)=>{
            this.setState({
                language: allLang
            })
        }

        return (
            <div className="center ph6-ns ">
                <div className="fl  w-third  h-third  ba center b--black-30  h3 " > Php
                {this.state.language[0].number}
                    <label className="fr" name='php' onClick={VoteForThis}>Vote</label>
                </div>
                <div className="fl  w-third  h-third  ba center b--black-30  h3 " > Pyton
                {this.state.language[1].number}

                    <label className="fr" name='pyton' onClick={VoteForThis}>Vote</label>

                </div>
                <div className="fl  w-third  h-third  ba center b--black-30  h3 " > JavaScript
                {this.state.language[2].number}

                    <label className="fr" name='javaScript' onClick={VoteForThis}>Vote</label>

                </div>
                <div className="fl  w-third  h-third  ba center b--black-30  h3 " > Java
                {this.state.language[3].number}

                    <label className="fr" name='java' onClick={VoteForThis}>Vote</label>

                </div>
            </div>
        )
    }
}

Vote.propTypes = {
    name: PropTypes.string

}


export default Vote



