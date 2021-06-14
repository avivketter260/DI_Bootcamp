import React, { Component } from 'react';


class FormData extends Component {
    constructor(props) {
        super(props)

        this.state = {
result: this.props.data
        }
    }


    render() {


console.log(this.state.result)
const { firstName,lastName,gender,age,select,checked } = this.props;

        return (

            <div className="entered-info">
      <h2>Entered information:</h2>
                            <p>Your name:{firstName} </p>
                            <p>Your lastName:{lastName} </p>
                            <p>Your age:{age}</p>
                            <p>Your gender:{gender}</p>
                            <p>Your destination:{select} </p>
                            <p>Your dietary restrictions:</p>
                            <div className="restrictiond">
                                <span id="Nuts free">**Nuts free :</span>{checked.indexOf('Nuts free') !== -1? 'Yes':"No"} <br />
                                <span id="Lactose free">**Lactose free : {checked.indexOf('Lactose free') !== -1? 'Yes':"No"}</span> <br />
                                <span id="Vegan meal">**Vegan meal : {checked.indexOf('Vega') !== -1? 'Yes':"No"}</span><br />
                            </div>
            </div>
        );
    }
}
export default FormData;











              {/* {
                
                     this.props.data.map(res=>{
                         console.log(res.checkedVal)
                         return(
                             <div>

                            <h2>Entered information:</h2>
                            <p>Your name: {res.firstName} {res.lastName}</p>
                            <p>Your age: {res.age}</p>
                            <p>Your gender: {res.radioVal}</p>
                            <p>Your destination: {res.opstionVal}</p>
                            <p>Your dietary restrictions:</p>
                            <div className="restrictiond">
                                <span id="Nuts free">**Nuts free : { res.checkedVal.indexOf('Nuts free') !== -1? 'Yes':"No"}</span> <br />
                                <span id="Lactose free">**Lactose free : { res.checkedVal.indexOf('Lactose free') !== -1? 'Yes':"No"}</span> <br />
                                <span id="Vegan meal">**Vegan meal : { res.checkedVal.indexOf('Vega') !== -1? 'Yes':"No"}</span><br />
                            </div>
                             </div>
                         )
                         
                        }) */}
                      
                         
                    
{/* } */}