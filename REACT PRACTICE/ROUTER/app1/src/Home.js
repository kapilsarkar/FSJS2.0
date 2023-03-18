import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const id = 5;
    const navigate =useNavigate()
    function goToAbout(){
          navigate('/about', {state : {carno : id }})
    }
  return (
    <>
      <div>Home Page</div>
    {/* <Link to="/contact">Contact Us</Link><br/>
    <Link to="/about">About Us</Link> */}
    <button onClick={goToAbout}>About</button>
    </>
    
  )
}

export default Home
