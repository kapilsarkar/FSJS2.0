
import './App.css';
import Header from './components/Header.js';
import Movie from './components/Movie';
import movie from "./movie.json";

function App() {
  return (
    <div className="App">
     <Header />
     <div className='main'>
      {
        movie.map((element) => {
        return(
          <Movie 
          title = {element.title} 
          year = {element.Year} 
          img = {element.Poster}
          />
        )
        })
      }
     
      
     </div>
    </div>
  );
}

export default App;
