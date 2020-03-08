import React from 'react'
import "./style.css"
import profilePic from "../../utils/assets/images/Profile Pic Snip.PNG"

function HomeJumbotron() {
    return (
        <div>
            <section id="jumbotron">
                <div className="container">
                    <div id="jumbotronContent">
                        <h2 id="jumbotronHeader">About me</h2>
                        <h3 id="headerSubtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper.</h3>
                        <p id="headerParagraphText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, mauris vel finibus molestie, nibh erat pellentesque felis, sed laoreet.</p>
                    </div>
                    <img id="profilePic" src={profilePic} alt="Profile"></img>
                </div>
            </section>
        </div>
    )
}

export default HomeJumbotron