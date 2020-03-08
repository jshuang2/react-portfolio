import React, { Component } from 'react';
import Header from "../components/Header/Header";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";
import CodeBlock from "../components/CodeBlock/CodeBlock";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeJumbotron />
                <CodeBlock />
            </div>
        )
    }
}

export default Home
