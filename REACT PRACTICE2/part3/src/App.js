
import { useState } from 'react';
import './App.css';
//React Form
//Controlled Components
//UnControlled Components

function App() {
  const [name,setName] =useState("Kapil");
  return (
    <div className="App">
     <form className='frm'>
      <label>First Name :</label> <br/>
      <input type="text" value ={name}/><br/>
     </form>
    </div>
  );
}

export default App;
