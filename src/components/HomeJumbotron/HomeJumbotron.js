import React from 'react'
import "./style.css"
import profilePic from "../../utils/assets/images/jeffhuang_headshot_2024_compressed.jpg"

function HomeJumbotron() {
    return (
        <div>
            <section id="jumbotron">
                <div className="container">
                    <div id="jumbotronContent">
                        <h2 id="jumbotronHeader">Hi, I'm Jeff.</h2>
                        <h3 id="headerSubtext">I'm a software engineer based in Seattle, Washington.</h3>
                        <p id="headerParagraphText">I have a passion for using code as a tool to build solutions that help our community. I'm currently pursuing a Master of Computer Science degree at Northeastern University.</p>
                    </div>
                    <img id="profilePic" src={profilePic} alt="Profile"></img>
                </div>
            </section>
        </div>
    )
}

export default HomeJumbotron