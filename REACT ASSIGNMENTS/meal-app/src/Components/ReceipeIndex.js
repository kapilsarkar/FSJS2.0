import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const ReceipeIndex = ({alphaIndex}) => {
    const alpha =["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
    let num=0;
  return (
    <>
         
      { 
        alpha.map(item => {
            return(
                <Tippy content="Click Here For Alphabetical Wise Meal " key={item}>
                     <div className='numBox' key={num++} onClick={()=> alphaIndex(item)}>
                  <h3>{item}</h3>
                </div>
                </Tippy>
               
            )
        })
      }
    </>
  )
}

export default ReceipeIndex
