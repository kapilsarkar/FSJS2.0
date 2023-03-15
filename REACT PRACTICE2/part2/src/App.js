
import './App.css';
import ChildA  from "./components/ChildA"
import { createContext, useMemo, useState} from 'react';


//create,provider,usecontext
const data = createContext();
const data1 = createContext();
const data2= createContext();
function App() {

  const [add,Setadd]= useState(0);
  const [minus,setMinus] = useState(100);

  const multiplication = useMemo(
    
    function multiply(){
      console.log("Function Called")
         return add *10;
       },[add]
  )
  
  const fname="Kapil"
  const lname="Sarkar"
  const addr="Asansol"
  return (
    <div className="App">
      <data.Provider value={fname}>
        <data1.Provider value={lname}>
          <data2.Provider value={addr}>
          <ChildA/>
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
      <h2>USE MEMO HOOK</h2>
      {multiplication}<br/>
      <button onClick={()=>Setadd(add+1)}>Addition</button>
      <span>{add}</span> <br/>
      <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
      <span>{minus}</span>
    </div>
  );
}

export default App;
export {data,data1,data2}
