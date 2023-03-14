import React from "react";
import {data} from '../App'

function ChildC({fname}){

    return(
        <>
          <h2>Componeent C Displaying: {fname}</h2>
          <data.Consumer>
            {
                (star) => {
                    return (
                        <h2>My Favourites are :{star}</h2>
                    )
                }
            }
          </data.Consumer>
        </>
       
        
    )

}
export default ChildC