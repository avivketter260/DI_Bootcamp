import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: 0,
            email: ''
        }
        this.handelChangeF = this.handelChangeF.bind(this)
        this.handelChangeL = this.handelChangeL.bind(this)
        this.handelChangeP = this.handelChangeP.bind(this)
        this.handelChangeE = this.handelChangeE.bind(this)
    }
    handelChangeF(e) {
        console.log(e.target.value)
        if (e.target.value !== '') {
 document.querySelectorAll('.error-message')[0].style.display='none'

            return (
                this.setState({
                    firstName: e.target.value
                })

            )
        }
 document.querySelectorAll('.error-message')[0].style.display='block'
    }


    handelChangeL(e) {
        console.log(e.target.value)
 document.querySelectorAll('.error-message')[1].style.display='none'

        if (e.target.value !== '') {
            return (
                this.setState({
                    lastName: e.target.value
                })

            )
        }
        let x =document.querySelectorAll('.error-message')[1].style.display='block'
    }

    handelChangeP(e) {
        console.log(e.target.value)
        if (e.target.value !== '') {
 document.querySelectorAll('.error-message')[2].style.display='none'

            return (
                this.setState({
                    phone: e.target.value
                })

            )
        }
        document.querySelectorAll('.error-message')[2].style.display='block'
      
    }
    handelChangeE(e) {
        console.log(e.target.value)
        if (e.target.value !== '') {
 document.querySelectorAll('.error-message')[3].style.display='none'
            return (
                this.setState({
                    email: e.target.value
                })

            )
        }
        document.querySelectorAll('.error-message')[3].style.display='block'
      
    }



    render() {
        return (
            <div>

                <form action="">
                    <div className="field-group">
                        <label >First Name</label>
                        <input type="text" name="" id="" onChange={this.handelChangeF} />
                        <span className='error-message' style={{ display: 'none' }}>First name is required</span>
                    </div>
                    <div className="field-group">
                        <label >Last Name</label>
                        <input type="text" name="" id="" onChange={this.handelChangeL} />
                        <span className='error-message' style={{ display: 'none' }}>Last name is required</span>

                    </div>
                    <div className="field-group">
                        <label >Phone</label>
                        <input type='text' name="" id="" onChange={this.handelChangeP} />
                        <span className='error-message' style={{ display: 'none' }}>Phone is required</span>

                    </div>
                    <div className="field-group">
                        <label >Email</label>
                        <input type="email" name="" id="" onChange={this.handelChangeE} />
                        <span className='error-message' style={{ display: 'none' }}>Email  is required</span>

                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
