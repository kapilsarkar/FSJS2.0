import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const Receipeinfo = () => {
    const [item,setItem]= useState();
    const {MealId} = useParams();
    if(MealId!=="")
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res => res.json()).then(data =>{
            setItem(data.meals[0]);
        })
    }
  return (
    <>
        {
            (!item)?"":(
                <>
                <div className='content'>
                      <img src={item.strMealThumb} alt=""/>
                      <div className='inner-content'>
                         <h1>Food Name:{item.strMeal}</h1>
                         <h2>Food Origin:{item.strArea}</h2>
                         <h3>Food Category :{item.strCategory}</h3>
                      </div>
                </div>
                <div className='reciepe-details'>
                    <div className='ingredients'>
                        <h1 className='rcp-head'>Food Ingredients :</h1>
                        <h3>{item.strIngredient1}:{item.strMeasure1}</h3>
                        <h3>{item.strIngredient2}:{item.strMeasure2}</h3>
                        <h3>{item.strIngredient3}:{item.strMeasure3}</h3>
                        <h3>{item.strIngredient4}:{item.strMeasure4}</h3>
                        <h3>{item.strIngredient5}:{item.strMeasure5}</h3>
                        <h3>{item.strIngredient6}:{item.strMeasure6}</h3>
                        <h3>{item.strIngredient7}:{item.strMeasure7}</h3>
                        <h3>{item.strIngredient8}:{item.strMeasure8}</h3>
                    </div>
                    <div className='instructions'>
                        <h1 className='rcp-head'>Instructions:</h1>
                        <h3>{item.strInstructions}</h3>
                    </div>
                </div>
                </>
            )
        }
    </>
    
  )
}

export default Receipeinfo
