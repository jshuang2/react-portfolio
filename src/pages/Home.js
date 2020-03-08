import React, { Component } from 'react';
import Header from "../components/Header/Header";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import UXBlock from "../components/UXBlock/UXBlock";
import Footer from "../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeJumbotron />
                <CodeBlock />
                <UXBlock />
                <Footer />
            </div>
        )
    }
}

export default Home
