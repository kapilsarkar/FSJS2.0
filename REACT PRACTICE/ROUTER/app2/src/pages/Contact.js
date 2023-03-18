import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>CONTACT US PAGE</h1>
      <p>Welcome to the Contact Us page</p>
      <p>Kapil SArkar you are Welcome to the Contact Us Page</p>
      <p>Contact at Gmail: k.sarkar81@hmail.com</p>
      <button onClick={()=>{
        navigate("/")
      }}>Go To Home Page</button>
    </div>
  )
}

export default Contact
