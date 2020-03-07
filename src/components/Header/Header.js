import React from 'react'
import "./style.css"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Jeff Huang</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link pageLink" href="#">About</a>
                            <a className="nav-item nav-link pageLink" href="#">Portfolio</a>
                            <a className="nav-item nav-link pageLink" href="#">Resume</a>
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
