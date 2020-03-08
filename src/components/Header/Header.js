import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Jeff Huang</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link pageLink" to="/about">About</Link>
                            <Link className="nav-item nav-link pageLink" to="/portfolio">Portfolio</Link>
                            <a className="nav-item nav-link pageLink" href="https://drive.google.com/file/d/1T6dZa208A94FNBsQ17-LMO7hJIxpcOzt/view" target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                        
                        <div className="navbar-nav socialMediaList">
                            <li className="nav-item nav-link"><a href="https://github.com/jshuang2" target="_blank"><i className="fab fa-github socialMedia"></i></a></li>
                            <li className="nav-item nav-link"><a href="mailto:jeffshuang2@gmail.com"><i className="fas fa-envelope socialMedia"></i></a></li>
                            <li className="nav-item nav-link"><a href="https://www.linkedin.com/in/jeffshuang/" target="_blank"><i className="fab fa-linkedin-in socialMedia"></i></a></li>
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
