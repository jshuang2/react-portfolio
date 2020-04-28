import React, { Component } from 'react'
import "./style.css"
import { Link } from "react-router-dom"



class Header extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Jeff Huang</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item nav-link pageLink"><Link to="/about">About</Link></li>
                            <li className="nav-item nav-link pageLink"><Link to="/portfolio">Portfolio</Link></li>
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
