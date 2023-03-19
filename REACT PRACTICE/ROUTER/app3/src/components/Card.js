import React from 'react'

function Card() {
  return (
    <section className='main-home'>
     <div className='card'>
      
      <img src={require('../img/virat5.webp')} alt="img1" className='img1'/>
    </div>
    <div className='card'>
      
    <img src={require('../img/virat6.avif')} alt="img1" className='img1'/>
  </div>
  <div className='card'>
      
    <img src={require('../img/virat.jpeg')} alt="img1" className='img1'/>
  </div>
    </section>
    
  )
}

export default Card
