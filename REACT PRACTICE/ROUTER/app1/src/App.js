
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'; 
//ROUTES,ROUTE
//LINK
//USE NAVIGATION HOOK 
//HOW TO PASS DATA WITH USENAVIGATE()
function App() {
  return (
  //   <div className="App">
  //  <h1>LEARNING REACT ROUTER V6</h1>
  //   </div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>

     
  );
}

export default App;
