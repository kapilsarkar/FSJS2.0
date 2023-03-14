
import './App.css';
import Header from './components/Header';
import State from './components/State';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Useref from './components/Useref';
import Propdrill from './components/Propdrill';
import ChildA from './components/ChildA';
import { createContext } from 'react';

const data = createContext();
function App() {
  const fname = "Kapil Sarkar The Great"
  const star= "John Cena Sona Baba"
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
    </div>
  );
}

export default App;
export {data};
