import React from 'react'
import "./style.css"
import profilePic from "../../utils/assets/images/Profile-Pic-Snip-compressed.png"

function HomeJumbotron() {
    return (
        <div>
            <section id="jumbotron">
                <div className="container">
                    <div id="jumbotronContent">
                        <h2 id="jumbotronHeader">Hi, I'm Jeff.</h2>
                        <h3 id="headerSubtext">I'm a full-stack web developer based in Seattle, Washington.</h3>
                        <p id="headerParagraphText">I create enjoyable user experiences with React. While I'm not coding, you can find me playing soccer, video games, or hiking the mountains in the Pacific Northwest.</p>
                    </div>
                    <img id="profilePic" src={profilePic} alt="Profile"></img>
                </div>
            </section>
        </div>
    )
}

export default HomeJumbotron