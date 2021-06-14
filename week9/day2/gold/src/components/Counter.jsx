import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pluseOne, minuseOne, happy, notHappy } from '../action/index'
import {myName} from '../action/name'


const Counter = () => {
    const counter = useSelector(state => state.counter);
    const isHappy = useSelector(state => state.happy)
    const name = useSelector(state =>state.name)
    const dispatch = useDispatch()
    console.log(counter)

    const handelSubmit = (e)=>{
       e.preventDefault()
       console.log(e.target.name.value)
       const value = e.target.name.value
       e.target.name.value=''
       dispatch(myName(value)) 
    }


    return (
        <div>
            
            <button onClick={() => dispatch(pluseOne())}>+</button>
            <span>&nbsp;&nbsp;{counter}&nbsp;&nbsp;</span>
            <button onClick={() => dispatch(minuseOne())}>-</button>
            <h3>-------------------------------------------------------------------</h3>
            <h4>Are you happy?</h4>
            <h1>{isHappy}</h1>
            <button onClick={() => dispatch(happy())}>YES</button>
            <button onClick={() => dispatch(notHappy())}>NO</button>

<h3>----------------------------------------------------------------------------------------</h3>
<form onSubmit={handelSubmit}>
 <input name='name' type="text" placeholder="Type name..."/>
<button type='submit'>HEY!</button>
<h1>{name}</h1>
</form>
        </div>
    )

}


export default Counter