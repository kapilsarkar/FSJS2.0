import React from 'react'
import { useState } from 'react'

import "../components/UseState.css"



const Usestate = () => {

    const [count,setCount] =useState(0);
    function UpdateCount()
    {
    setCount (count +1);
    }
  return (
    <div>
       <h2 className='usestate'>Use State In React:</h2>
     <h2>Button Clicked {count} times</h2>
     <button onClick={UpdateCount}>Click</button>

    </div>
  )
}

export default Usestate



  



