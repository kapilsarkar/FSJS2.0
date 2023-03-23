import React from 'react'

function Detail({seleted,close}) {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <div className='container mt-5'>
           <div className='row'>
             <div className='col-12 col-md-6 text-center'>
               <img src={seleted.Poster} alt="img2" />
             </div>
             <div className='col-12 col-md-6 text-white'>
                 <h2>{seleted.Title}</h2>
                 <h2>{seleted.Year}</h2>
                 <h2>Rating : {seleted.imdbRating}</h2>
                 <h3>{seleted.Plot}</h3>
                 <button onClick={close} className='btn btn-success'>Go Back To Search</button>
             </div>

           </div>
        </div>
      
    </div>
  )
}

export default Detail
