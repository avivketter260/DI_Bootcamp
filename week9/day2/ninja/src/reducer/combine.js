import { combineReducers } from 'redux'
import {task,active} from './index'

const allReducers = combineReducers({
    task: task,
    active:active
})

export default allReducers