import React from "react";
import './four.scss';
import tom from './img/tom.png';
import michael from './img/michael.png';
import tim from './img/tim.png';



function Four() {

    const [ over , setOver ] = React.useState(false);

    const buttonstyle={
        backgroundColor: ''
    }

    if(over){
        buttonstyle.backgroundColor="green";
    }
    else{
        buttonstyle.backgroundColor='';
    }

    return(
        <div className="four">
            <div className="container">
                <div className="text">
                    <h1>The Team</h1>
                    <div className="stick"></div>
                </div>
                <div className="images">
                    <div className="tom">
                        <img src={tom}/>
                        <div className="bg_text">
                            <p>TOM JONES</p>
                            <div className="line"></div>
                            <p className="second_text">Creative Director</p>
                            <span>Create with simplicity in mind!</span>
                        </div>
                    </div>
                    <div className="michael">
                        <img src={michael}></img>
                        <div className="bg_text">
                            <p>MICHAEL FRAUP</p>
                            <div className="line"></div>
                            <p className="second_text">Creative Director</p>
                            <span>Create with simplicity in mind!</span>
                        </div>
                    </div>
                    <div className="tim">
                        <img src={tim}></img>
                        <div className="bg_text">
                            <p>TIM CAHILL</p>
                            <div className="line"></div>
                            <p className="second_text">Creative Director</p>
                            <span>Create with simplicity in mind!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Four;