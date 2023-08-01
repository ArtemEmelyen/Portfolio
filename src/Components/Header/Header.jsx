import React from "react";
import './header.scss';

function Header() {
    
    return(
        <div className="main">
            <div className="container">
                <div className="header">
                    <a href="#">WORKS</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACT</a>
                </div>
                <div className="main_text">
                    <h1>WHERE GREAT IDEAS COME TO LIFE</h1>
                    <p>Passionate creative studio helping startups grow their business!</p>
                </div>
            </div>
        </div>
    )


}

export default Header;