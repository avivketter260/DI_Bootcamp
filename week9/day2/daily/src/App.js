import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetailes'
function App() {
  return (
    <div className="App">
    <MovieList/>
    <MovieDetails/>
    </div>
  );
}

export default App;
