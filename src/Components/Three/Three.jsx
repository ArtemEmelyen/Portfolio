import React from "react";
import './three.scss';
import kitty from './img/kitty.png';
import macbook from './img/macbook.png';
import camera from './img/camera.png';
import imac from './img/imac.png';

function Three() {
    return(
        <div className="three">
            <div className="content">
                <div className="left_block">
                    <div className="text">
                        <h1>Latest Works</h1>
                        <div className="stick"></div>
                        <div className="links">
                            <a href="#">ALL</a>
                            <a href="#">WEB DESIGN</a>
                            <a href="#">BRANDING</a>
                            <a href="#">PHOTOGRAPHY</a>
                            <a href="#">ILLUSTRATION</a>
                        </div>
                    </div>
                    <div className="kitty">
                        <img src={kitty}/>
                        <div className="text5">
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit.</p>
                            <a href="#">READ MORE</a>
                            <span>A KITTEN’S<br></br>LIFE</span>
                        </div>
                        
                    </div>
                    <div className="macbook">
                        <img src={macbook} />
                        <div className="text5">
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit.</p>
                            <a href="#">READ MORE</a>
                            <span>APPLE’S<br></br>LOST MAGIC</span>
                        </div>
                    </div>
                </div>
                <div className="right_block">
                        <div className="camera">
                            <img src={camera} />
                            <div className="text5">
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit.</p>
                            <a href="#">READ MORE</a>
                            <span>100 YEARS<br></br>PHOTOGRAPHY</span>
                        </div>
                        </div>
                        <div className="imac">
                            <img src={imac}/>
                            <div className="text5">
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur<br></br>
                            adipiscing elit.</p>
                            <a href="#">READ MORE</a>
                            <span>GROOVEMADE<br></br>PRODUCTS FOR MAC</span>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Three;