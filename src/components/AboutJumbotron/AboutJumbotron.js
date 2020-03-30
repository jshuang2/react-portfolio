import React from 'react'
import "./style.css"
// import ProfilePic from "../../utils/assets/images/Profile Pic Snip.PNG"
import MtRainier from "../../utils/assets/images/mt-rainier.jpg"
import Seattle2 from "../../utils/assets/images/seattle-2.JPG"
import Montana from "../../utils/assets/images/montana.JPG"
import Family from "../../utils/assets/images/family.JPG"
// import Colorado from "../../utils/assets/images/colorado.JPG"

function AboutJumbotron() {
    return (
        <div>
            <section id="aboutJumbotron">
                <div className="container">
                    <div id="aboutHeaderContainer">
                    <h2 id="aboutMeHeader">Who am I?</h2>
                    </div>
                    {/* <div className="headerLineShort"></div> */}
                    {/* <p id="aboutHeaderSubtext" className="centerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut.</p> */}
                    <div id="aboutJumbotronContent">
                        <p className="aboutHeaderParagraphText">My background stems from a unique combination of marketing and UX/UI design. After graduating from the University of Louisville in 2017 with a degree in marketing, I discovered a newfound interest in UX design. It was soon after discovering UX that I realized I enjoyed creating these user experiences a bit more than I did designing them.</p>

                        
                        <p className="aboutHeaderParagraphText">I enrolled in the University of Washington's full-stack web development coding bootcamp in August 2019. I can honestly say I've never enjoyed learning more than I did while taking this course. As someone whose life has revolved around computers and technology, I fell in love with coding immediately! I graduated from bootcamp in February 2020 and am now looking for full-time employment.</p>
                        
                        
                        <p className="aboutHeaderParagraphText">I specialize in front end development with React JS, but I also have experience developing full-stack MERN applications. However, I'm constantly dabbling with new innovative technologies in the programming world.</p>
                    </div>
                    {/* <img id="profilePic" className="aboutPic" src={ProfilePic} alt="Profile"></img> */}
                    <img id="montana" className="aboutPic" src={Montana} alt="Montana"></img>
                    <img id="seattle2" className="aboutPic" src={Seattle2} alt="Seattle"></img>
                    <img id="mtRainier" className="aboutPic" src={MtRainier} alt="Mt Rainier"></img>
                    <img id="family" className="aboutPic" src={Family} alt="My family"></img>
                    {/* <img id="colorado" className="aboutPic" src={Colorado} alt="Colorado"></img> */}
                </div>
            </section>
        </div>
    )
}

export default AboutJumbotron