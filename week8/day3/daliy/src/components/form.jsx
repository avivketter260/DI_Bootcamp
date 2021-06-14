import React, { Component } from 'react';
import '../App.css';
import FormData from './formData'
class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            selcet: '',
            checked: []

        }
        this.handleFChange = this.handleFChange.bind(this);
        this.handleLChange = this.handleLChange.bind(this);
        this.handleAChange = this.handleAChange.bind(this);
        this.handleMChange = this.handleMChange.bind(this);
        this.handleFaChange = this.handleFaChange.bind(this);
        this.handleSChange = this.handleSChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChChange = this.handleChChange.bind(this);


    }
    handleFChange(event) {
        this.setState({ firstName: event.target.value });
    }
    handleLChange(event) {
        this.setState({ lastName: event.target.value });
    }
    handleAChange(event) {
        this.setState({ age: event.target.value });
    }
    handleMChange(event) {
        this.setState({ gender: event.target.value });
    }
    handleFaChange(event) {
        this.setState({ gender: event.target.value });
    }
    handleSChange(event) {

        this.setState({ selcet: event.target.value });
    }
    handleChChange(event) {
        let checked = this.state.checked
        checked.push(event.target.value)
        this.setState({
            checked: checked
        })


    }

    handleSubmit(event) {
        // event.preventDefault();




    }

    render() {

        return (

            <div>
                <nav>
                    <h1>Sample form</h1>
                </nav>
                <form action='http://localhost:3000/' className="form" onSubmit={this.handleSubmit}>
                    <input id="firstName" type="text" placeholder="First Name" defaultValue="" name ="firstName" value={this.state.firstName} onChange={this.handleFChange} /> <br />
                    <input id="lastName" type="text" placeholder="Last Name" defaultValue="" name="lastName"  value={this.state.lastName} onChange={this.handleLChange} /><br />
                    <input id="age" type="text" placeholder="Age" defaultValue="" name="age" value={this.state.age} onChange={this.handleAChange} /><br />
                    <input type="radio" name="gender" id="gender" value="Male" onChange={this.handleMChange} />Male <br />
                    <input type="radio" name="gender" id="gender" value="Fmale" onChange={this.handleFaChange} />Female <br />
                    <strong>Select your destination </strong><br />
                    <select name="" id="" defaultValue="" value={this.state.selcet} onChange={this.handleSChange}>
                        <option value=""> --Please Choose a desttination--</option>
                        <option name="Thailand" value="Thialand"  >Thialand</option>
                        <option value={this.state.selcet} value='Japan'>Japan</option>
                        <option value={this.state.selcet} value='Brazil'>Brazil</option>
                    </select>
                    <br />
                    <br /><br />    <strong id="moveD" >Dietary restrictions:</strong>
                    <div className="checkBox" onChange={this.handleChChange}>
                        <br /> <input type="checkbox" value="Nuts free" name="checkBox" id="checkbox" />Nuts free
                    <br /> <input type="checkbox" value='Lactose free' name="checkBox" id="checkbox" />Lactose free
                    <br /> <input type="checkbox" value='Vega' name="checkBox" id="checkbox" />Vegan <br />
                    </div>

                    <button className="submit" type="submit">Submit</button>
                </form>
                <hr />
                <FormData firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age} gender={this.state.gender}
                    select={this.state.selcet} checked={this.state.checked} />
            </div>
        );
    }
}
export default Form;