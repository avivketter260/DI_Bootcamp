import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendToEdit,restEdit } from '../action/index'
const dataArr = []
const OutPut = () => {
    const dispatch = useDispatch()
    const allData = useSelector(state => state.handelFormObj)
    if (allData) {
        dataArr.push(allData)
    }
    const edit = (e) => {
        console.log('edit');
        let allChildren = e.target.parentNode.parentNode.children

        dataArr.forEach(res => {
            if (res.accountNumber === allChildren[0].getAttribute('value') && res.ac === allChildren[1].getAttribute('value') && res.amount === allChildren[2].getAttribute('value')) {
                return dispatch(sendToEdit(res))
            }
        })
      console.log(); 
      e.target.parentNode.parentNode.remove()
        console.log(dataArr);

    }


    const remove = (e)=>{
      e.target.parentNode.parentNode.remove()
        
    }
    console.log(dataArr);
    return (
        <div>
            {
                dataArr.map((item, i) => {
                    return (
                        <div key={i} style={{ display: 'flex', justifyContent: 'center' }} >
                            <div style={{ border: '1px solid black' ,padding:'7px'} } name="account" className='Account' value={item.accountNumber}>{item.accountNumber}</div>
                            <div style={{ border: '1px solid black' ,padding:'7px'}} className='ac' value={item.ac}>{item.ac}</div>
                            <div style={{ border: '1px solid black',padding:'7px' }} className="amount" value={item.amount}>{item.amount}</div>
                            <div style={{ border: '1px solid black',padding:'7px' }}><button onClick={edit}>Edit</button></div>
                            <div style={{ border: '1px solid black',padding:'7px' }}><button onClick={remove}> Delete</button></div>
                        </div>

                    )
                })
            }


        </div>
    )
}

export default OutPut