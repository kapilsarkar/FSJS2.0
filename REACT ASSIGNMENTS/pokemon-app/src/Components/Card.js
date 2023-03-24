import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const Card = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                             <Tippy content="Click Here For More Information">
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                            </Tippy>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;
