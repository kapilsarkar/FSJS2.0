import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
function Result({result,openDetail}) {
  return (
    <Tippy content="Click Here to Know More">
         <div className='result ' onClick={e => openDetail(result.imdbID)}>
        <div className='border border-dark border-3'>
        <img src={result.Poster} alt="img" />
        </div>
         <div className='bg-dark text-white p-2'>
         <h3>{result.Title}</h3>
         </div>
       
    </div>
    </Tippy>
   
  )
}

export default Result
