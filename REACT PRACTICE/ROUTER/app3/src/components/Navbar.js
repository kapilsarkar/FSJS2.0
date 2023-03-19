import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className='nav-link'>Home</NavLink>
      <NavLink to="aboutus" className='nav-link'>About Us</NavLink>
      <NavLink to="contactus" className='nav-link'>Contact Us</NavLink>
    </nav>
  )
}

export default Navbar
