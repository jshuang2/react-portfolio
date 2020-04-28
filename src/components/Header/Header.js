import React, { Component } from 'react'
import "./style.css"
import { Link } from "react-router-dom"



class Header extends Component {

   state = {
       isOpen: "false",
       textColor: "white",
       backgroundColor: "none"
   }

   onClickHandler = () => {

    // const navMenu = document.getElementById("navbarNavAltMarkup");
    // const navItem = document.getElementsByClassName("nav-item");

       if (this.state.isOpen === "false") {
            // navMenu.style.backgroundColor = "#f9f9f9";
            // navMenu.style.width = "20%";
            // console.log(navItem);

            this.setState({
                isOpen: "true",
                textColor: "black",
                backgroundColor: "red"
            })
       }

       else {
            this.setState({
                isOpen: "false",
                textColor: "white",
                backgroundColor: "none"
            })
       }
   }

    render() {
        return (<div>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Jeff Huang</Link>

                    <button className="navbar-toggler" id="hamburger" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={this.state.isOpen} onClick={this.onClickHandler} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" style={{backgroundColor: this.state.backgroundColor}}id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item nav-link pageLink" style={{color: this.state.textColor}}><Link to="/about">About</Link></li>
                            <li className="nav-item nav-link pageLink" style={{color: this.state.textColor}}><Link to="/portfolio">Portfolio</Link></li>
                            <li><a className="nav-item nav-link pageLink" href="https://drive.google.com/file/d/1Vp_46WkDn_8eggbRxS85PAPnEkPKm-SU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                        </ul>


                        <ul className="navbar-nav socialMediaList">
                            <li className="nav-item nav-link"><a href="https://github.com/jshuang2" target="_blank" rel="noopener noreferrer"><i className="fab fa-github socialMedia"></i></a></li>
                            <li className="nav-item nav-link"><a href="mailto:jeffshuang2@gmail.com"><i className="fas fa-envelope socialMedia"></i></a></li>
                            <li className="nav-item nav-link"><a href="https://www.linkedin.com/in/jeffshuang/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in socialMedia"></i></a></li>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
        )
    }
}


export default Header
