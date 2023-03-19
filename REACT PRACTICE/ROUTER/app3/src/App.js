import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="aboutus" element={<Aboutus/>}/>
        <Route path="contactus" element={<Contact/>}/>
     </Routes>
     <Outlet/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
