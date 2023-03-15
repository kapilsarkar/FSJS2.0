
import './App.css';
import Header from './components/Header';
import State from './components/State';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Useref from './components/Useref';
import Propdrill from './components/Propdrill';
import ChildA from './components/ChildA';
import { createContext } from 'react';
import Usecontext from './components/Usecontext';

const data = createContext();
const data1 = createContext();
const data2 = createContext();
function App() {
  const fname = "Kapil Sarkar The Great"
  const star= "John Cena Sona Baba"
  const wname = Usecontext(data1);
    const gender = Usecontext(data2);
  return (
    <div className="App">
     <Header surname="Sarkar" address="Asansol"/>
     <State/>
     <Usestate/>
    <Useeffect/>
    <Useref/>
    <Propdrill/>
    <ChildA fname={fname}/>
    <data.Provider value={star}>
      <ChildA/>
    </data.Provider>
    <Usecontext/>
    <data1.Provider value={wname}>
      <data2.Provider value={gender}>
    <ChildA/>
    </data2.Provider>
    </data1.Provider>
   
    </div>
  );
}

export default App;
export {data};
