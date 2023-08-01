import React from "react";
import './second.scss';
import logo from '../Second/img/logo3.svg';
import pencil from './img/pencil.svg';

function Second() {
    return (
    <div className="second">
        <div className="container">
            <div className="content">
                <div className="text">
                    <h1>Our Services</h1>
                </div>
                <div className="stick"></div>
                <div className="blocks">
                    <div className="branding">
                        <div className="up">
                            <div className="text1">
                                <h1>BRANDING</h1>
                                <div className="stick2"></div>
                            </div>
                            <div className="logo">
                                <img src={logo}></img>
                            </div>
                        </div>
                        <div className="down">
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit, sed do eiusmod tempor<br></br>
                            incididunt.</p>
                            <a href="#">READ MORE</a>
                            <div className="line43"></div>
                        </div>
                    </div>
                    <div className="design">
                        <div className="up">
                            <div className="text2">
                                <h1>DESIGN</h1>
                                <div className="stick2"></div>
                            </div>
                            <div className="logo2">
                                <img src={pencil}></img>
                            </div>
                        </div>
                        <div className="down">
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit, sed do eiusmod tempor<br></br>
                            incididunt.</p>
                            <a href="#">READ MORE</a>
                            <div className="line43"></div>
                        </div>
                    </div>
                    <div className="develompment">
                        <div className="up">
                            <div className="text3">
                                <h1>DEVELOPMENT</h1>
                                <div className="stick2"></div>
                            </div>
                            <div className="logo">
                                <img src={logo}></img>
                            </div>
                        </div>
                        <div className="down">
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit, sed do eiusmod tempor<br></br>
                            incididunt.</p>
                            <a href="#">READ MORE</a>
                            <div className="line43"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Second