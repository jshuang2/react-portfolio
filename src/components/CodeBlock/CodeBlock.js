import React, { Component } from 'react'
import HomeContext from "../../context/home-context"
import "./style.css"

class CodeBlock extends Component {
    render() {
        return (
            <HomeContext.Consumer>
                {context => (
                    <div className="container">
                        <div className="headerLine">
                            <h3 className="bodyHeader">Code</h3>
                        </div>
                        <div className="cardWrapper">
                            <a href="https://github.com/jshuang2/react-google-books-search" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard">
                                    <img className="cardImage" src={context[0].image} alt="Project One: Google Books Search" />
                                </div>
                            </a>
                            <a href="https://github.com/jshuang2/react-clicky-game" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard">
                                    <img className="cardImage" src={context[1].image} alt="Project Two: Game of Thrones Memory" />
                                </div>
                            </a>
                            <a href="https://github.com/jshuang2/MongoWebScraper" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard">
                                    <img className="cardImage" src={context[3].image} alt="Project Three: Mongo Web Scraper" />
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </HomeContext.Consumer>
        )
    }
}

export default CodeBlock
