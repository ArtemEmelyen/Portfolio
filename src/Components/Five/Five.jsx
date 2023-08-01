import React from "react";
import './five.scss';
import stars from './img/Stars.svg';
import briefcase from './img/briefcase.svg';
import mail from './img/mail.svg';


function Five() {

    return(
        <div className="five">
            <div className="upper">
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br></br>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br></br>
                    aliquip ex ea commodo consequat. </p>
                    <p>99</p>
                    <h1>DAVID JAMES <span>/ Web Design</span></h1>
                    <img src={stars}></img>
                </div>
            </div>
            <div className="down">
                <div className="want">
                    <img src={briefcase}></img>
                    <h1>Want to work together?</h1>
                    <p>Amazing. Tell us about your project!</p>
                </div>
                <div className="contact">
                    <img src={mail}></img>
                    <h1>Contact us</h1>
                    <p>Get in touch</p>
                </div>
            </div>
        </div>

    )
}
export default Five