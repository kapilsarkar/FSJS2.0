
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Blog from './pages/Blog';
import Contact from "./pages/Contact"
import Error from './pages/Error';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      {/* <h1>WELCOME TO REACT ROUTER PROJECT LEARNING</h1> */}
       <BrowserRouter>
       <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/blogs" element={<Blogs/>}/>
           <Route path="/blogs/:title" element={<Blog/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="*" element={<Error/>}/>
       </Routes>
    </BrowserRouter>
    
    </div>
    
    // <div className="App">
    //  <h1>WELCOME TO REACT ROUTER PROJECT LEARNING</h1>
    // </div>
  );
}

export default App;
