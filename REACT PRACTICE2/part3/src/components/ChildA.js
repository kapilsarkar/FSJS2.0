import React, { useState } from 'react'
import  "../components/ChildA.css"

const ChildA = (props) => {

    const[wname,setWname] = useState();
    const handleSubmit=(e)=>{
       e.preventDefault();
       props.getData(wname)
    }
  return (
    <div>
      <h2 className='lft'>LIFTING STATE UP :<br/> Transferring Data from Child Component To Parent Component</h2>
     <form onSubmit={handleSubmit}>
        <input type="text" value={wname} onChange={(e)=>
            {setWname(e.target.value)}}>
            </input>
            <button>Submit</button>
     </form>
    </div>
  )
}

export default ChildA
