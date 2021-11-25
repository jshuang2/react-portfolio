import React, { Component } from 'react';
import Header from "../components/Header/Header";
import AboutJumbotron from "../components/AboutJumbotron/AboutJumbotron";
import CoreSkills from "../components/CoreSkills/CoreSkills";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import "./style.css";

class About extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <Header />
                    <AboutJumbotron />
                    <CoreSkills />
                    <ContactForm />
                </div>
                <Footer />
            </div>
        )
    }
}

export default About
