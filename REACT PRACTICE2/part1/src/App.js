
import './App.css';
import Header from './components/Header';
import State from './components/State';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';

function App() {
  return (
    <div className="App">
     <Header surname="Sarkar" address="Asansol"/>
     <State/>
     <Usestate/>
     <Useeffect/>
    </div>
  );
}

export default App;
