import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/blogs" className='nav-link'>Blog</NavLink>
        <NavLink to="/contact" className='nav-link'>Contact Us</NavLink>
       
    </nav>
  )
}

export default Navbar
