import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputAction } from '../action/inputAction'


const Search = () => {

    const inputVal = useSelector(state => state.input)

    const dispatch = useDispatch();


    const all = [
        'How to fetch data in React',
        `React's Ecosystem as a flexible Framework`,
        `What's new in React 16?`,
        `8 things to learn in React before using Redux`,
        `Accept Stripe Payments with React and Express`,
        `Tips to learn React + Redux`,
        `Redux or MobX: An attempt to dissolve the Confusion`,
        `A gentle Introduction to React's Higher Order Components`,
        `Tips to learn React + Redux`
    ]
    const handelChange = (e) => {
        console.log(e.target.value)
        const value = e.target.value


        dispatch(inputAction(value))
    }


    console.log('value: ' + inputVal)
    return (
        <div>
            <span>Search</span> <br /> <br />
            <input type="text" onChange={handelChange} placeholder='Search' />

            <ul>
                {all.map((item, i) => {
                    
                    const splitItem = item.split('')

                if (splitItem.find(res => res === inputVal)){
                    return <li key={i}><a href='#'>{item}</a></li>
                } 


                if(inputVal ==='')return <li key={i}><a href='#'>{item}</a></li>
                
                      
                    
                })}
            </ul>
            <span>Take the journey to learn Redux in <a href="#">Getting Started with Redux</a> Getting Started with Redux</span>
        </div>
    )
}

export default Search