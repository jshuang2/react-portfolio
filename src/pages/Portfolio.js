import React, { Component } from 'react'
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
// import Footer from "../components/Footer/Footer";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Header />
                Welcome to the Portfolio page!
                <CardList />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Portfolio
