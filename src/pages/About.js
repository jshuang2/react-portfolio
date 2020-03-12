import React, { Component } from 'react';
import Header from "../components/Header/Header";
import AboutJumbotron from "../components/AboutJumbotron/AboutJumbotron";
import CoreSkills from "../components/CoreSkills/CoreSkills";

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutJumbotron />
                <CoreSkills />
            </div>
        )
    }
}

export default About
