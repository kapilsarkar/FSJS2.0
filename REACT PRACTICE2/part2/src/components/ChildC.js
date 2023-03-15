import React, { useContext } from "react"
import {data,data1,data2} from "../App"

function ChildC(){
    const fname = useContext(data);
    const lname = useContext(data1);
    const addr = useContext(data2);
    return(
        <>
        <h3>Hello My First Name is : {fname}  My Last Name is :{lname} My Address is : {addr}</h3>
        </>
    )
}
export default ChildC;