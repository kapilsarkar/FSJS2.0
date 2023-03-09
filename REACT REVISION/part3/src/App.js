

import './App.css';

import Header from './components/Header';
import { useState } from 'react';

function App() {

 

   const [num, setNum] = useState(1);
   function inc()
   {
     setNum(num + 1);
   }
   function dec()
   {
     setNum(num - 1);
   }

  return (
    <div className="App">
      <Header/>
      <div className='main'>
          <h1 className='heading'>Count : {num}</h1>
          <button className='btn' onClick={inc}>Increment</button>
          <button className='btn' onClick={dec}>Decrement</button>
        </div>

    </div>
   
  );
}

export default App;
