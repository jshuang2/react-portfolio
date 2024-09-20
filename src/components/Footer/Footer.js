import React from 'react'
import "./style.css"

function Footer() {
    return (
            <footer id="footer">
                <div className="container">
                    <div id="footerContent">
                        <p id="copyright">&#9400; 2024 Jeff Huang</p>
                        <ul>
                            <li className="nav-item"><a href="https://www.linkedin.com/in/jeffshuang/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in socialMedia"></i></a></li>
                            <li className="nav-item"><a href="mailto:jeffshuang2@gmail.com"><i className="fas fa-envelope socialMedia"></i></a></li>
                            <li className="nav-item"><a href="https://github.com/jshuang2" target="_blank" rel="noopener noreferrer"><i className="fab fa-github socialMedia"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
    )
}

export default Footer