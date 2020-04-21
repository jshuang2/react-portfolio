import React, { Component } from 'react'
import wanderWeb from "../../utils/assets/images/wander-web-mockup-compressed.png"
import wanderApp from "../../utils/assets/images/wander-app-mockup-compressed.png"
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
                        <div className="card homeCard grow">
                            <img className="cardImage" src={wanderWeb} alt="Project One: Wander Landing Page" />
                            <div className="cardText">
                                <p className="cardName">Wander landing page</p>
                                <p className="cardTags">Adobe XD, Balsamiq</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://jeffhuangux.com/wander" target="_blank" rel="noopener noreferrer">
                        <div className="card homeCard grow">
                            <img className="cardImage" src={wanderApp} alt="Project Two: Wander App" />
                            <div className="cardText">
                                <p className="cardName">Wander app</p>
                                <p className="cardTags">Adobe XD, Whimsical</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://jeffhuangux.com/craft" target="_blank" rel="noopener noreferrer">
                        <div className="card homeCard grow">
                            <img className="cardImage" src={craft} alt="Project Three: Craft App" />
                            <div className="cardText">
                                <p className="cardName">CRAFT</p>
                                <p className="cardTags">Adobe XD</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default CodeBlock
