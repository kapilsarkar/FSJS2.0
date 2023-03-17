
import { useState } from 'react';
import './App.css';
//USE STATE HOOK WITH OBJECT --
//HERE THE ...ALLVALUES IS THE SPREAD OPERATOR WHICH AT FIRST CREATES A COPY OF THE OLD VALUES THEN IT UPDATES THE FIRSTNAME AS INSTRUCTED BY THE SETVALUES FUNCTION.


//USE STATE HOOK WITH ARRAY --


function App() {
  const [allvalues,setValues]= useState({fname:"Kapil",lname:"Sarkar"})
  const [items,setItems] = useState([])
  console.log(items);
  function additems(){
    setItems([...items,{
      id:items.length,
      value:Math.random()
    }])
  }


  function update(){
    setValues({...allvalues,fname:"Piku"})
  }
  return (
    <div className="App">
      <h2>USE STATE HOOK WITH OBJECT</h2>
      <h1>First Name is {allvalues.fname} and Last Name is {allvalues.lname}</h1>
      <button onClick={update}>Update</button>
      <h2>USE STATE HOOK WITH ARRAY</h2>
      <ol>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
      <button onClick={additems}>Add Items</button>
    </div>
  );
}

export default App;
