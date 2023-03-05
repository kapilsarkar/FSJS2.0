import React, { useEffect, useState } from "react"
import Card from "./card";
import  Axios  from "axios";


export default function App() {


  const [details,setDetails] = useState({})

  const fetchDetails = async() => {
    const {data} = await Axios.get('https://randomuser.me/api')

    console.log("RESPONE",data);
    const details = data.results[0]
    setDetails(details)



  }
  let list =["Sachin","Kohli","Rohit"]

  useEffect(()=>{
    fetchDetails();
  },[])
  return (
    <>
       <div>
      App
    </div>
    <Card myname = "PikuSarkar"  mylist ={list} details = {details}/>

     <button onClick={fetchDetails}>get Details</button>
    </>
   
  )
}
