import React from 'react'
import "./style.css"
import MtRainier from "../../utils/assets/images/mt-rainier-compressed.jpg"
import Seattle2 from "../../utils/assets/images/seattle-2-compressed.jpg"
import Montana from "../../utils/assets/images/montana-compressed.jpg"
import Family from "../../utils/assets/images/family-compressed.jpg"

function AboutJumbotron() {
    return (
        <div>
            <section id="aboutJumbotron">
                <div className="container">
                    <div id="aboutHeaderContainer">
                    <h2 id="aboutMeHeader">Who am I?</h2>
                    </div>
                    <div id="aboutJumbotronContent">
                        <p className="aboutHeaderParagraphText">Originally from a marketing and sales background, it wasn't until 2019 that I discovered a genuine passion for coding and building software. I realized that I wasn't finding any joy in persuading people and companies to buy products that I myself did not believe in. So, I learned to code and never looked back. Now, my goal is to use this newfound skill as a tool to create software solutions I believe in and that truly help people in their everyday lives.</p>

                        
                        <p className="aboutHeaderParagraphText">In 2019, I dove head-first into coding and learned full-stack web-development at University of Washington's coding bootcamp. After that, I found a role as an Associate Software Engineer at Infosys where I became proficient in Java and automation testing. Now, I've decided to pursue a Master of Science in Computer Science degree at Northeastern University here in Seattle where I hope to hone my skills in back-end development and building scalable systems. I'm currently seeking a 2025 software engineer internship!</p>
                        
                        
                        {/* <p className="aboutHeaderParagraphText">I specialize in back-end development using Java and Python. I also have experience with full-stack development using React. However, I'm constantly dabbling with new innovative technologies in the programming world. I'm currently seeking a 2025 internship as a software engineer!</p> */}
                    </div>
                    <div className="aboutImagesContainer">
                    <img id="montana" className="aboutPic" src={Montana} alt="Montana"></img>
                    <img id="seattle2" className="aboutPic" src={Seattle2} alt="Seattle"></img>
                    <img id="mtRainier" className="aboutPic" src={MtRainier} alt="Mt Rainier"></img>
                    <img id="family" className="aboutPic" src={Family} alt="My family"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutJumbotron