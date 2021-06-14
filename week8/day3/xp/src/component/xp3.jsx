import React from 'react';



class ExerciseOne extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            isToggleOn : "ON"
        }
        this.shoot3 = this.shoot3.bind(this);
        this.shoot5 = this.shoot5.bind(this);
    }

    shoot3() {
        alert(this)
    }
    shoot5(arg) {
        alert(arg)
    }

    render() {

        const shot = () => {
            alert('Great shot!')
        }


        const shotAgain = () => {
            shot()

        }
        const shoot2 = () => {
            alert(this)
        }

        const shoot4 = (arg) => {
            alert(arg)
        }

        const handleClick = (agr) => {
            alert(agr)

        }
        const clickHandler = () => {
            alert(' I was clicked')
        }
const handleKeyPress = (event)=>{
if (event.key === 'Enter'){
    alert(`the Enter key eas pressed. your Input is ${event.target.value}`)
}
}

const toggle = () => {
    if (this.state.isToggleOn === "ON"){
        alert(this.state.isToggleOn)
        this.setState({isToggleOn:"OFF"})
    } else if (this.state.isToggleOn === "OFF"){
        alert(this.state.isToggleOn)

        this.setState({isToggleOn:"ON"})
    }        }


        return (
            <div>
                <button onClick={shot} >Take a shot</button>
                <button onClick={shotAgain} >Again</button>
                <button onClick={shoot2}>Keep Shooting!</button>
                <button onClick={this.shoot3}>Keep More Shooting!</button>
                <button onClick={() => shoot4('Goal')}>Shooting</button>
                <button onClick={() => this.shoot5('Goal')}>Shooting</button>
                <button onClick={() => handleClick('Goal')}>Shooting</button>
                <button onClick={clickHandler}>Click Me!</button>
                <input type="text" placeholder='Press Enter' onKeyPress={handleKeyPress} />
<button onClick={toggle}>Toggle</button>
            </div>
        )
    }

}
export default ExerciseOne
