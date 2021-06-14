import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { oneMore, lessOne, happy, notHappy } from './action/index'



// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// store.subscribe(() => console.log(store.getState()));

const MoreOrLess = () => {
    const counter = useSelector(state => state.counter)
    const happyState = useSelector(state => state.isHappy)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(oneMore())}>+</button>
            <span>&nbsp;&nbsp; {counter}&nbsp;&nbsp;&nbsp;</span>

            <button onClick={() => dispatch(lessOne())}>-</button>
            <h5>----------------------------------------------------------------------</h5>
            <h3>Are You Happy?</h3>
            <h2>{happyState}</h2>
            <button onClick={() => dispatch(happy())}>YES</button>
            <button onClick={() => dispatch(notHappy())}>NO</button>
        </div>


    );
}

export default MoreOrLess;
