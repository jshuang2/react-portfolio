import React, { Component } from 'react'
import Placeholder from "../../utils/assets/images/image-placeholder.png"
import "./style.css"

class CodeBlock extends Component {
    render() {
        return (
            <div className="container">
                <div className="headerLine">
                    <h3 className="bodyHeader">Code</h3>
                </div>
                <div className="cardWrapper">
                    <div className="card">
                        <img className="imagePlaceholder" src={Placeholder} alt="Project One" />
                    </div>
                    <div className="card">
                        <img className="imagePlaceholder" src={Placeholder} alt="Project Two" />
                    </div>
                    <div className="card">
                        <img className="imagePlaceholder" src={Placeholder} alt="Project Three" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeBlock
