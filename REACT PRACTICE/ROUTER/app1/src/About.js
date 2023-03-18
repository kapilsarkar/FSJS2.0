import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function About() {
    const location = useLocation();
    console.log(location.state);
  return (
    <>
      <div>
     Hello Welcome to About Page and Your Car No is : {location.state.carno} 
    </div>
    <Link to="/contact">Contact Us</Link><br/>
    <Link to="/">Home</Link>
    </>
    
  )
}

export default About
