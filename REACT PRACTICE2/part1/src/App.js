
import './App.css';
import Header from './components/Header';
import State from './components/State';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Useref from './components/Useref';
import Propdrill from './components/Propdrill';
import ChildA from './components/ChildA';

function App() {
  const fname = "Kapil Sarkar The Great"
  return (
    <div className="App">
     <Header surname="Sarkar" address="Asansol"/>
     <State/>
     <Usestate/>
    <Useeffect/>
    <Useref/>
    <Propdrill/>
    <ChildA fname={fname}/>
    </div>
  );
}

export default App;
