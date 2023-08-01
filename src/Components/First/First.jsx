import React from "react";
import './first.scss'
import img from './image.png';

function First() {

    return(
        <div className="first">
            <div className="first_container">
                <div className="left_text">
                    <h1>WE ARE</h1><br/><span>THE SQWD</span>
                    <p>Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit, sed do<br/>
                    eiusmod tempor incididunt.</p>
                    <div className="stick"></div>
                </div>
                <div className="first_image">
                    <img src={img}/>
                </div>
                <div className="right_text">
                    <p>Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit, sed do<br/>
                    eiusmod tempor incididunt.</p>
                    <div className="stick"></div>
                </div>
            </div>
        </div>
    )
}

export default First;