import React, { useEffect, useState } from 'react'


import "../components/Useeffect.css"

const Useeffect = () => {

const [num,setnum] = useState(0);

  useEffect(()=>{
    alert("I am Clicked")
  },[])
  return (
    <div>
      <h1 className='useefect'>USE EFFECT HOOK</h1>
      <button className='btn' onClick={()=>{setnum(num+1);}}>Click me : {num}</button>
    </div>
  )
}

export default Useeffect
