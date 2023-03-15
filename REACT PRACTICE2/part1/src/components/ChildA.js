import React from "react";
import ChildB from "./ChildB";
import { createContext } from 'react';

const data1 = createContext();
const data2 = createContext();

function ChildA({fname}){
    
    return(
        <>
        <ChildB fname={fname}/>
       
        </>
       
    )

}
export default ChildA
export {data1,data2}