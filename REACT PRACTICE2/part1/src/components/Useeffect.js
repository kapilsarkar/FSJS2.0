import React from 'react'

import "../components/Useeffect.css"

import { useState, useEffect } from 'react'

const Useeffect = () => {
    const [data,setdata] = useState("Ram");
    console.log("Data Mounted")


  function updateData(){
    setdata("Sita")
  }
  return (
    <div>
      <h2 className='useefect'>Use Effect Hook in React</h2>
      <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default Useeffect
