import { combineReducers } from 'redux'
import { handelFormObj, sendToEdit } from './index'
const allReducer = combineReducers({
    handelFormObj: handelFormObj,
    sendToEdit: sendToEdit,
})

export default allReducer