
import './App.css';
//Rendering of List in React
//How map() works in React
function App() {
  const IPL = ["CSK","MI","RCB","SRH","KKR"]
  const result=IPL.map((team,index)=><h1 key={index}>{team} index is {index}</h1>)
  return (
    <div className="App">
      <h2>RENDERING OF LIST IN REACT</h2>
      <h2 >{result}</h2>
    </div>
  );
}

export default App;
