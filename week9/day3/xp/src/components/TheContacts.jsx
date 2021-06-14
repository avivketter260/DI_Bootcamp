import React from 'react'

const allInputVal = []

const TheContacts = (props) => {
    const { input } = props
    console.log(input)
    if (allInputVal[allInputVal.length - 1] === input) {
        allInputVal.pop()
    }
    allInputVal.push(input)
    console.log(allInputVal);

    const removeThis = (e) => {
        console.log();
        e.target.parentElement.remove()
    }
    return (
        <div>


            {allInputVal.map((item, i) => {
                console.log(item)
                if(item==='') return
                return (
                    <div style={{ display: 'flex' }} key={i} className="item">

                        <div className="contacts" >{item}</div>
                        <button className='remove' onClick={removeThis}>Remove</button>
                    </div>
                )
            })

            }

        </div>
    )
}
export default TheContacts