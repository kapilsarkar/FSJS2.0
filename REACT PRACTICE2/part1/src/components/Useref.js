import React from 'react'

import "../components/Useref.css"
import { useRef } from 'react'
import { useState } from 'react'

const Useref = () => {

    const refElement =useRef("");
    const [name,setName] = useState("Kapil")
    console.log(refElement);
    function Reset()
    {
      setName("")
      refElement.current.focus()
    }
    function HandleInput()
    {
      refElement.current.style.color="red"
      refElement.current.value ="Piku"
    }
  return (
    <div>
      <h2 className='useref'>USER REF HOOK IN REACT</h2>
      <input ref={refElement} type="text" value={name} onChange={(e)=>(setName(e.target.value))}></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={HandleInput}>Handle Input</button>
    </div>
  )
}

export default Useref
