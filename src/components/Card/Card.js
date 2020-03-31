import React from 'react'
import "./style.css"


function Card({ src, link, name, tags }) {
    console.log("This is src", src);

    return (
        <div className="img-container">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="card portfolioCard">
                    <img className="cardImage" src={src} alt="Project One" />
                    <p className="cardName">{name}</p>
                    <p className="cardTags">{tags}</p>
                </div>
            </a>
        </div>
    )
}

export default Card;