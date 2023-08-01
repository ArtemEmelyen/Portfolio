import React from "react";
import './footer.scss';
import Facebook from './img/facebook.svg';
import Twitter from './img/twitter.svg';
import Pinterest from './img/pinterest.svg';

function Footer(){
    return(
        <div className="footer">
            <div className="upper">
                <div className="text">
                    <p>3rd Floor, Santa Monica Beach, CA, San Francisco<br></br>
                    (359) 0 123 456 789 - info@yourmail.com</p>
                </div>
                <div className="icons">
                    <img src={Facebook}></img>
                    <img src={Twitter}></img>
                    <img src={Pinterest}></img>
                </div>
            </div>
            <div className="under">
                    <p>Copyright 2016 - All Rights Reserved - Designed by JD</p>
            </div>
        </div>
    )
}
export default Footer