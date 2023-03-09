
import './App.css';
import Header from './components/Header.js';
import Movie from './components/Movie';
import movie from "./movie.json";

function App() {
  
  // let login = true;

  // if(login == false)
  // {  
  //    return <h1>You are no Allowed</h1>

  // }
  // else{
  //   return <h1>Welcome to Movie Website</h1>
  // }

  return (
    <div className="App">
     <Header />
     <div className='main'>
      {
        movie.map((element,index) => {
        return(
          <Movie 
          key = {index}
          title = {element.Title} 
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
