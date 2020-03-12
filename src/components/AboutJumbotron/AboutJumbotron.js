import React from 'react'
import "./style.css"
import profilePic from "../../utils/assets/images/Profile Pic Snip.PNG"

function AboutJumbotron() {
    return (
        <div>
            <section id="aboutJumbotron">
                <div className="container">
                    <h2 id="aboutMeHeader">Who am I?</h2>
                    <div className="headerLineShort"></div>
                    <p id="headerParagraphText" className="centerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut.</p>
                    <div id="aboutJumbotronContent">
                        <p className="aboutHeaderParagraphText">In vel pellentesque magna. Pellentesque ac diam rhoncus tellus elementum vulputate malesuada a dui. Morbi consectetur purus id augue suscipit, eget posuere enim elementum. Nullam elit risus, condimentum id lacus et, aliquet mattis nisl. Pellentesque at luctus augue. Donec egestas turpis eget arcu congue venenatis. Aliquam a efficitur sem. Morbi vitae quam ligula. Donec faucibus dolor id purus tristique vulputate. In quis tempus justo.</p>
                        
                        <p className="aboutHeaderParagraphText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nulla ac iaculis tempor. Phasellus pellentesque sit amet velit vitae lacinia. Phasellus sit amet turpis quis neque tristique luctus ut tristique metus. Vivamus scelerisque ornare elementum. Morbi ac lacus sem.</p>
                        
                        <p className="aboutHeaderParagraphText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas diam nec tincidunt eleifend. Vestibulum iaculis eros quis pulvinar accumsan. Cras id arcu lacus. Aenean mollis, metus sit amet elementum.</p>
                    </div>
                    <img id="profilePic" src={profilePic} alt="Profile"></img>
                </div>
            </section>
        </div>
    )
}

export default AboutJumbotron