import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {sendForm,resetEdit} from '../action/index'
const Form = () => {
    let edit = useSelector(state => state.sendToEdit)
    const dispatch = useDispatch()


    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.AccountNumber.value)
        const allInputsVal = {
            accountNumber: e.target.AccountNumber.value,
            fsc: e.target.fsc.value,
            ac: e.target.ac.value,
            amount: e.target.amount.value,
        }
        e.target.AccountNumber.value =''
        e.target.fsc.value =''
        e.target.ac.value =''
        e.target.amount.value =''

        if(edit) dispatch(resetEdit())
        dispatch(sendForm(allInputsVal))
    }
    if(edit){
        return(
            <div className="form">
            <h1>Financial Transactions:</h1>
            <form onSubmit={handelSubmit}>
                <input name="AccountNumber" type="text" placeholder={edit.accountNumber}  /><br />
                <input name="fsc" type="text" placeholder={edit.fsc } /><br />
                <input name="ac" type="text" placeholder= {edit.ac } /><br />
                <input name="amount" type="text" placeholder={ edit.amount } /><br />
                <button className="submit" type='submit'>Submit</button>
            </form>
            <hr />

        </div>
        )
    }
    return (
        <div className="form">
            <h1>Financial Transactions:</h1>
            <form onSubmit={handelSubmit}>
                <input name="AccountNumber" type="text" placeholder="Account Number" /><br />
                <input name="fsc" type="text" placeholder="FSC" /><br />
                <input name="ac" type="text" placeholder="A/C Holder Name" /><br />
                <input name="amount" type="text" placeholder="Amount" /><br />
                <button className="submit" type={'submit'}>Submit</button>
            </form>
            <hr />
        </div>
    
    )

}

export default Form