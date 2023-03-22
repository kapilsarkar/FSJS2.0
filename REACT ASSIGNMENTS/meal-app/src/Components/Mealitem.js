import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const Mealitem = ({data}) => {
    console.log(data);
    let navigate = useNavigate();
  return (
    <>
      {
        (!data) ? "Data Not Found" : data.map(item => {
            return (
              <Tippy content="Click Here to Know More" key={item.idMeal}>
                   <div className='card' key={item.idMeal} onClick={() => {navigate(`/${item.idMeal}`)}}>
                <img src ={item.strMealThumb} className='card-img' alt ="" />
                <h3>{item.strMeal}</h3>
              </div>
              </Tippy>
                
            )
        })
      }
     
    </>
    
  )
}

export default Mealitem
