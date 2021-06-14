import { counter,isHappy } from './index'
import { combineReducers } from 'redux'
// import { isHappy } from './IsHappy'

const allReducers = combineReducers ({
    counter: counter,
    isHappy:isHappy

})
export default allReducers