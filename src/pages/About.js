import React, { Component } from 'react';
import Header from "../components/Header/Header";
import AboutJumbotron from "../components/AboutJumbotron/AboutJumbotron";
import CoreSkills from "../components/CoreSkills/CoreSkills";
import Form from "../components/Form/Form";

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutJumbotron />
                <CoreSkills />
                <Form />
            </div>
        )
    }
}

export default About
