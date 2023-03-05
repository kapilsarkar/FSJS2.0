import React from 'react'

export default function card({myname, mylist}) {

   // console.log(props);

   
  return (

    <>
         <div>
      This is a Card of Kapil Sarkar
    </div>
    <div>{myname}</div>
    <ul>
        {mylist}
        {mylist.map(l => (
            <li key={l}>{l}</li>
        ))}
    </ul>
    </>
   
  )
}
