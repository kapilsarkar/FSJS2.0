
import './App.css';

//import HeaderElement from './Header';  //FOR IMPORTING SINGLE FUNCTION

import { Header, HeaderElement } from './Header';  //FOR IMPORTINF MULTIPLE FUNCTIONS THIS IS CALLED OBJECT DESTRUCTRING

function App() {
//REACT JS IS ALL ABOUT COMPONENET BASED STRUCTURE
  let names= "Welcome to Kapil Sarkar Website"
  return (
    <div className="App">

      <HeaderElement />
      <Header />
      <h1>{names}</h1>
      
    </div>
  );
}

export default App;
