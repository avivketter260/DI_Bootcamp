import { combineReducers } from 'redux'


import { counter, happy,myName } from './index'
import { input } from './input'

const allRuducers = combineReducers({
    counter: counter,
    happy: happy,
    name:myName,
    input: input

})

export default allRuducers