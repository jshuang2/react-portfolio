import React, { Component } from 'react';
import Header from "../components/Header/Header";
import AboutJumbotron from "../components/AboutJumbotron/AboutJumbotron";

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutJumbotron />
                Welcome to the About page!
            </div>
        )
    }
}

export default About
