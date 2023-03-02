//import logo from './logo.svg';
//import './App.css';

import { useState } from "react";



function SuperHeros(){

  const [hero, setHero] = useState(["Superman","Spiderman","Ironman"])

  const [name, setName] = useState( () => "antman")


  const onAddName = () => {
     setHero([...hero, name])
     setName("")
  }


  return (
    <div>
      <ul>
        {hero.map( (h) => (
          <li key={h}>{h}</li>
        ) ) }
      </ul>

    <input
     type="text"
     value={name}

     onChange={(e) => setName(e.target.value)}
     />
     <button onClick={onAddName}>Add Value</button>
    </div>
  )

}


function Counter(){
   
  let  [count , setCount] = useState (100)

  function oneUp(){
   setCount(count + 1);
  }

  return(
    <div>
      <button onClick={oneUp}>Count : {count}</button>
      <SuperHeros/>
    </div>
  )
}


function App() {
  return (
    <div>
        <h1>Hello To React</h1>
      <Counter/>
      <Counter/>
      
      
    </div>
    //Virtual DOM IS CREATING DIFFERENT COPPIES IN SAME MEMORY LOCATION
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       HELLO WORLD APP
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
