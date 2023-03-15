
import './App.css';
import ChildA  from "./components/ChildA"
import { createContext} from 'react';


//create,provider,usecontext
const data = createContext();
const data1 = createContext();
const data2= createContext();
function App() {

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
      
    </div>
  );
}

export default App;
export {data,data1,data2}
