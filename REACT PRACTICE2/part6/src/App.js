
import React from 'react'
import './App.css';
import Counter from './Counter';
import Counter1 from './Counter1';
import Counter2 from './Counter2';


//Use Reducer Hook-
function App() {
  
  return (
    <div className="App">
     <h1>USE REDUCER HOOK IN REACT</h1>
    <Counter/>
    <h1>CUSTOM HOOKS IN REACT</h1>
    <h2>Counter 1 :</h2>
    <Counter1/>
    <h2>Counter 2 :</h2>
    <Counter2/>
    </div>
  );
}

export default App;
