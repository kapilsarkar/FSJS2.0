import React from "react";
import ChildC from "./ChildC";

function ChildB({fname}){
    return(
        <ChildC fname={fname}/>
    )

}
export default ChildB