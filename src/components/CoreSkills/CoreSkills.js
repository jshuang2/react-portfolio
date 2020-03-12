import React from 'react'
import ReactLogo from "../../utils/assets/images/icons8-react-native-144.png"
import MySQLLogo from "../../utils/assets/images/icons8-sql-96.png"
import JavaScriptLogo from "../../utils/assets/images/icons8-javascript-144.png"
import HTMLLogo from "../../utils/assets/images/icons8-html-5-144.png"
import CSSLogo from "../../utils/assets/images/icons8-css3-144.png"
import NodeLogo from "../../utils/assets/images/icons8-nodejs-144.png"
import MongoLogo from "../../utils/assets/images/icons8-mongodb-144.png"
import "./style.css"

function CoreSkills() {
    return (
        <div className="container">
            <div>
                <img src={ReactLogo} alt="React" className="skillsIcon"></img>
                <img src={MySQLLogo} alt="MySQL" className="skillsIcon"></img>
                <img src={JavaScriptLogo} alt="JavaScript" className="skillsIcon"></img>
                <img src={HTMLLogo} alt="HTML" className="skillsIcon"></img>
                <img src={CSSLogo} alt="CSS" className="skillsIcon"></img>
                <img src={NodeLogo} alt="NodeJS" className="skillsIcon"></img>
                <img src={MongoLogo} alt="MongoDB" className="skillsIcon"></img>
            </div>
        </div>
    )
}

export default CoreSkills