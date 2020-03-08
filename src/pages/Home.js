import React, { Component } from 'react'
import Header from "../components/Header/Header";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeJumbotron />
                {/* <h1>Welcome to the home page!</h1> */}
            </div>
        )
    }
}

export default Home
