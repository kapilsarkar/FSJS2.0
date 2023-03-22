
import './App.css';
import Meal from './Components/Meal';
import  './Components/style.css';
import {Routes,Route} from "react-router-dom"
import Receipeinfo from './Components/Receipeinfo';
function App() {
  return (
    <div className="App">
      <h1 className='top-head'>MEAL-DB APP</h1>
      <Routes>
         <Route path="/" element={<Meal/>}/>
         <Route path="/:MealId" element= {<Receipeinfo/>}/> 
      </Routes>
      
      
    </div>
  );
}

export default App;
