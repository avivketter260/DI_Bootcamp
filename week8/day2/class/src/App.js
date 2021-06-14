import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './components/BootstrapCard'
import Jumbotron from './components/Jumbotron'
import Alert from'./components/Alert'
const MyFunction = () => {
  return <h1>I’m a React Component</h1>;
}


function App() {
  return (
    <div>
      <header >
        {/* <BootstrapCard title='McCartney' imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
          buttonLabel='Go to Wikipedia' buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
           description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, 
           musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.' />

     <BootstrapCard title='Bob Dylan' imageUrl="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg"
            buttonLabel='Go to Wikipedia' buttonUrl='https://en.wikipedia.org/wiki/Bob_Dylan'
           description='Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.'
           
           />
            <Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>  */}

{/* <Alert text='OMG! Something really bad has happended!' show={true} color='4545' /> */}



 <Alert text='OMG! Something really bad has happended!' show={true} color='alert-danger'/>
<Alert text='OMG! Something really bad has happended!' show={true} color='alert-warning' />
<Alert text='OMG! Something really bad has happended!' show={true} color='alert-success' /> 
      </header>
    </div>
  );
}


export default App;
