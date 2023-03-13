
import './App.css';
import Header from './components/Header';
import State from './components/State';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Useref from './components/Useref';

function App() {
  return (
    <div className="App">
     <Header surname="Sarkar" address="Asansol"/>
     <State/>
     <Usestate/>
    <Useeffect/>
    <Useref/>
    </div>
  );
}

export default App;
