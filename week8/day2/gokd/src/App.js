import logo from './logo.svg';
import './App.css';
import Car from './Components/Car'
import Info from './Components/Info'
import Hobby from './Components/Hobby'
import Phone from './Components/Phone'
function App() {

  const carinfo = {
    name: "Ford",
     model: "Mustang"
    };

  return (
    <div>
{/* <Car /> */}
{/* <Info  model={carinfo.model}/> */}
<Phone/>
    </div>
  );
}

export default App;
