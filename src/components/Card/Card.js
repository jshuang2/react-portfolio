import React from 'react'
import "./style.css"


function Card({src}) {
    console.log("This is src", src);
    
    return (
        <div className="img-container">
            <div className="card portfolioCard">
                <img className="cardImage" src={src} alt="Project One" />
            </div>
        </div>
    )
}

export default Card;