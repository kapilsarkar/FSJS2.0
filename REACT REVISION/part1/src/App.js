
import './App.css';
//import { HeaderElement } from './Header';

import HeaderElement from './components/Header';  //FOR IMPORTING SINGLE FUNCTION

import Footer from './components/Footer';

//import { Header, HeaderElement } from './Header';  //FOR IMPORTINF MULTIPLE FUNCTIONS THIS IS CALLED OBJECT DESTRUCTRING

//import Header , {HeaderElement} from './Header';  //IMPORT HEADER FROM DEFAULT AND HEADERELEMENT FROM OBJECT EXPORT/

import Student from './components/Student';



function App() {
//REACT JS IS ALL ABOUT COMPONENET BASED STRUCTURE
  let names= "Welcome to Kapil Sarkar Website"
  return (
    <div className="App">

      <HeaderElement />
      
      <h1>{names}</h1>

      <Footer/>

      <Student names ="PIKU SARKAR"
       age={32}/>

      <Student names ="VIRAT KOHLI"
       age={34}/>

     <Student names ="JOHN CENA"
       age={34}/>
      
    </div>
  );
}

export default App;
