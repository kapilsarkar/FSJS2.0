import React from 'react'
import { useNavigate } from 'react-router-dom';

const Mealitem = ({data}) => {
    console.log(data);
    let navigate = useNavigate();
  return (
    <>
      {
        (!data) ? "Data Not Found" : data.map(item => {
            return (
                <div className='card' key={item.idMeal} onClick={() => {navigate(`/${item.idMeal}`)}}>
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
