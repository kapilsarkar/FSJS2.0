import React from "react";
import ChildB from "./ChildB";

function ChildA({fname}){
    return(
        <ChildB fname={fname}/>
    )

}
export default ChildA