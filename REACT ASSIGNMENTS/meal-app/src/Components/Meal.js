import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem'
import ReceipeIndex from './ReceipeIndex'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const Meal = () => {
  const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const[item,setItem] = useState();
  const [show,setShow] = useState(false);
  const [search,setSearch] = useState("")
  useEffect(()=>{
     fetch(url).then(res => res.json()).then(data=>{
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);
     })
  },[url])

  const setIndex =(alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  }
  const searcReciepe= (evt) => {
      if(evt.key === "Enter"){
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      }
  } 
  return (
    <div className='main'>
       <div className='heading'>
        <h1>SEARCH YOUR FOOD :</h1>
       
       </div>
       <Tippy content="Enter Your Food Name ">
       <div className='searchBox'>
        <input type="search" className='search-bar' onChange={e=> setSearch(e.target.value)} onKeyDown={searcReciepe} placeholder="Search Your Item"/>
        </div> 
       </Tippy>
       
        <div className='container'>
          
          {
            show ?   <Mealitem data={item}/> : "Data Not Found"
          }
        </div>
        <h1 className='serach-alpha'>SEARCH YOUR FOOD ALPHABETICALLY  :</h1>
        <div className='indexContainer'>
        
         <ReceipeIndex alphaIndex={(alpha)=> setIndex(alpha)}/>
        </div>
    </div>
  )
}

export default Meal
