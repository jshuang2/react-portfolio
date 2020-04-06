import React, { Component } from 'react'
import Placeholder from "../../utils/assets/images/image-placeholder.png"
import "./style.css"


class CodeBlock extends Component {
    render() {
        return (
            <div className="container">
                <div className="headerLine">
                    <h3 className="bodyHeader">UX/UI Design</h3>
                </div>
                <div className="cardWrapper" id="uxWrapper">
                    <div className="card homeCard">
                        <img className="cardImage" src={Placeholder} alt="Project One" />
                    </div>
                    <div className="card homeCard">
                        <img className="cardImage" src={Placeholder} alt="Project Two" />
                    </div>
                    <div className="card homeCard">
                        <img className="cardImage" src={Placeholder} alt="Project Three" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeBlock
