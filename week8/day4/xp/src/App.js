import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/counter'
import ErrorBoundry from './components/ErrorBoundry'
function App() {
  return (
    <div className="App">
      <ErrorBoundry >
        <BuggyCounter />
      </ErrorBoundry>
    </div>
  );
}

export default App;
