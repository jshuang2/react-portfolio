import React, { Component } from 'react';
import Header from "../components/Header/Header";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import UXBlock from "../components/UXBlock/UXBlock";
import Footer from "../components/Footer/Footer";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <Header />
                    <HomeJumbotron />
                    <CodeBlock />
                    <UXBlock />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
