import React from 'react';

const Recipe = ({calories,label,image}) =>{
    return(
       <div className="recipe">
           <img src={image} alt={label}/>
           <h1>{label}</h1>
            <p>{calories}</p>
       </div> 
    );
};

export default Recipe;