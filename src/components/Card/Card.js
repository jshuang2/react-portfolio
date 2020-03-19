import React from 'react'


function Card({src}) {
    console.log("This is src", src);
    
    return (
        <div className="img-container">
            <div className="card portfolioCard">
                <img className="imagePlaceholder" src={src} alt="Project One" />
            </div>
        </div>
    )
}

export default Card;