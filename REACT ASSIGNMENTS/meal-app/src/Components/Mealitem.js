import React from 'react'

const Mealitem = ({data}) => {
    console.log(data);
  return (
    <>
      {
        (!data) ? "Data Not Found" : data.map(item => {
            return (
                <div className='card'>
                <img src ={item.strMealThumb} className='card-img' alt ="" />
                <h3>{item.strMeal}</h3>
              </div>
            )
        })
      }
     
    </>
    
  )
}

export default Mealitem
