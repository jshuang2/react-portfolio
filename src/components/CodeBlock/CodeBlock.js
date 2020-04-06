import React, { Component } from 'react'
import HomeContext from "../../context/home-context"
import "./style.css"

class CodeBlock extends Component {
    render() {
        return (
            <HomeContext.Consumer>
                {context => (<div className="container">
                <div className="headerLine">
                    <h3 className="bodyHeader">Code</h3>
                </div>
                <div className="cardWrapper">
                    <div className="card homeCard">
                        <img className="cardImage" src={context[0].image} alt="Project One" />
                    </div>
                    <div className="card homeCard">
                        <img className="cardImage" src={context[1].image} alt="Project Two" />
                    </div>
                    <div className="card homeCard">
                        <img className="cardImage" src={context[3].image} alt="Project Three" />
                    </div>
                </div>
            </div>)}
            </HomeContext.Consumer>
        )
    }
}

export default CodeBlock
