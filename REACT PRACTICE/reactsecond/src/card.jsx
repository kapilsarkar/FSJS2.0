import React from 'react'

export default function card({myname, mylist, details}) {

   // console.log(props);

   
  return (

    <>
         <div>
      This is a Card of Kapil Sarkar
    </div>
    <div>{myname}</div>
    <h1>{details.gender}</h1>
    <h2>{details.name?.first}</h2>
    <ul>
        {mylist}
        {mylist.map(l => (
            <li key={l}>{l}</li>
        ))}
    </ul>
    </>
   
  )
}
