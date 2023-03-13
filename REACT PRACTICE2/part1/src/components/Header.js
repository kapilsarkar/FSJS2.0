
import React from 'react'

import "../components/Header.css"

function Header(props){

    console.log(props);
    return (
       <> 
      <h1 className='header'>REACT-PROPS</h1>
            <h2>Hello Kapil</h2>
            <h2>Your Surname is : {props.surname}</h2>
            <h2>Your Address is : {props.address}</h2>
       </> )
     
}

export default Header
