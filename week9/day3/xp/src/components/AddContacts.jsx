import React from 'react'
import TheContacts from './TheContacts'
import { useSelector, useDispatch } from 'react-redux'
import { input } from '../action/index'
const AddContacts = () => {
    const dispatch = useDispatch();
const inputVal = useSelector(state => state.input)
    const handelSubmit = (e) => {
        e.preventDefault()
        const inputVal = e.target.input.value
        dispatch(input(inputVal))
        e.target.input.value = ''
    }
console.log(inputVal)
    return (
        <div>
            <div className='heade'>
                <h1>Clientside Contacts Application</h1>
            </div>

            <form className="form" onSubmit={handelSubmit}>
                <h2>Add Contact</h2>
                <input name='input' type="text" /> <br />
                <button type='submit' >ADD</button>
            </form>
            <hr />
             { inputVal!==''? <TheContacts input={inputVal}/>: null}

        </div>
    )
}
export default AddContacts