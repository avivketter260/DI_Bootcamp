import React, { Component } from 'react'

class Gold extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            age:null,
            input: '',
            errormessage:'',
            textArea:'',
            select:''
        }
        this.handelChange = this.handelChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handelChangetwo = this.handelChangetwo.bind(this)
        this.handelChangeTextArea = this.handelChangeTextArea.bind(this)
        this.handelChangeSelect = this.handelChangeSelect.bind(this)
        
    }
    handelChange(event) {
        this.setState({
            username: event.target.value,
        })
    }
    handelChangetwo(e){
        console.log(e.target.value)
        let number = parseInt(e.target.value)
if (number) return( 
    document.querySelector('span').style.display='none',
    this.setState({
        age: e.target.value,
    })
    ) 
    // return alert("Numbers Only")
    return document.querySelector('span').style.display='block'
}



handelChangeTextArea(e){
this.setState({
    textArea: e.target.value
})
}
handelChangeSelect(e){
    console.log(e.target.value)
    this.setState({
        select: e.target.value
    })
}   

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        let number = parseInt(event.target[1].value)
        if (!number) return alert('age is not a number') 

            // alert("Yuo are Submiting " + event.target[0].value)
            this.setState({
                show:true,
                value:event.target[0].value,
            })
            event.target[0].value=''
            event.target[1].value=''
        }
    render() {
      
            return (
                <div>
                    <p>Hello:  {this.state.username} {this.state.age}</p>
                    <form onSubmit={this.handleSubmit }>
                        <br /><input type="text" name='' onChange={this.handelChange} placeholder="username" />
                      <br /> <input type="text" name='' placeholder='Age' onChange={this.handelChangetwo} /> <span style={{display:'none'}}>Your age must be a number</span>
                      <br /> <textarea name="" id="" cols="30" rows="10"   onChange={this.handelChangeTextArea}></textarea>
                      <br /><select name="" id=""  onChange={this.handelChangeSelect}>
                        <option value="Volvo">Volvo</option>
                        <option value="Ford">Ford</option>
                        <option value="Mazda">Mazda</option>
                      </select>
                       <br /> <button type="submit">Clcik</button>
                    </form>
                </div>

            )
        }
    }
    

        // return (
        //     <div>

        //        { console.log(this.state.username)}
        //         {/* <p>Enter yout name and submit:  {this.state.username}</p> */}

        //         <form onSubmit={this.handleSubmit}>

        //             <input type="text" onChange={this.handelChange} placeholder="username" />
        //             <button type="submit">Clcik</button>

        //         </form>
        //     </div>
        // )



export default Gold