
import { useState } from 'react';
import './App.css';
import ChildA from "./components/ChildA"
//React Form
//Controlled Components
//UnControlled Components
//Here Handle Change is Controlled Component
function App() {
  const [name,setName] = useState("");
  const[pswd,setPswd] = useState("");
  function getData(data){
    console.log(data);
  }
  
  function handleChange(e){

    if(e.target.name === "firstname"){
      const capName = (e.target.value).toUpperCase();
      setName(capName);
    }
    else{
      setPswd(e.target.value);
    }

  }
  
  return (
    <div className="App">
     <form className='frm'>
      <label>First Name :</label>
      <input type="text" name = "firstname" value ={name} onChange={handleChange}/><br/>
      <label>Password :</label> 
      <input type="text" name = "password" value ={pswd} onChange={handleChange}/><br/>
     
     </form>
     <ChildA getData={getData}/>
      
    </div>
  );
}

export default App;
