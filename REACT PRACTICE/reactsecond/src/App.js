import React from "react"
import Card from "./card";

export default function App() {

  let list =["Sachin","Kohli","Rohit"]
  return (
    <>
       <div>
      App
    </div>
    <Card myname = "PikuSarkar"  mylist ={list}/>
    </>
   
  )
}
