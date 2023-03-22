import React from 'react'

const ReceipeIndex = ({alphaIndex}) => {
    const alpha =["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
    let num=0;
  return (
    <>
         
      { 
        alpha.map(item => {
            return(
              
                <div className='numBox' key={num++} onClick={()=> alphaIndex(item)}>
                  <h3>{item}</h3>
                </div>
            )
        })
      }
    </>
  )
}

export default ReceipeIndex
