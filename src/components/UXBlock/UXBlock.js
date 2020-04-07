import React, { Component } from 'react'
import wanderWeb from "../../utils/assets/images/wander-web-mockup.PNG"
import wanderApp from "../../utils/assets/images/wander-app-mockup.png"
import craft from "../../utils/assets/images/craft-mockup.jpg"
import "./style.css"


class CodeBlock extends Component {
    render() {
        return (
            <div className="container">
                <div className="headerLine">
                    <h3 className="bodyHeader">UX/UI Design</h3>
                </div>
                <div className="cardWrapper" id="uxWrapper">
                    <a href="https://jeffhuangux.com/wander-webpage" target="_blank" rel="noopener noreferrer">
                        <div className="card homeCard">
                            <img className="cardImage" src={wanderWeb} alt="Project One: Wander Landing Page" />
                        </div>
                    </a>
                    <a href="https://jeffhuangux.com/wander" target="_blank" rel="noopener noreferrer">
                        <div className="card homeCard">
                            <img className="cardImage" src={wanderApp} alt="Project Two: Wander App" />
                        </div>
                    </a>
                    <a href="https://jeffhuangux.com/craft" target="_blank" rel="noopener noreferrer">
                        <div className="card homeCard">
                            <img className="cardImage" src={craft} alt="Project Three: Craft App" />
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default CodeBlock
