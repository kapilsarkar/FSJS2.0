import React from 'react'
import "../components/State.css"

let x=10;

function updateState()
{
  x= 15;
  
}
console.log(x);
const State = () => {
  return (
    <div>
      <h1 className='state'>Learning State</h1>
      <h2>State : {x}</h2>
      <button onClick={updateState}>Click Me</button>
    </div>
  )
}

export default State
