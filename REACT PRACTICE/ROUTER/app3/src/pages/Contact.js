import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div className='contact'>
     
       <h1 className='home-head'>WELCOME TO CONTACT US PAGE</h1>
       <img src={require('../img/virat9.jpg')} alt="img1" className='img5'/>
      
      <button className='cnt-btn' onClick={()=>{
        navigate("/")
      }}>Go to Home Page</button>
    </div>
  )
}

export default Contact
