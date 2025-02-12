import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import flower from "./assets/flower.webm";
import bird from "./assets/bird.webm";
function Final() {

    return (
        <div className="container">
            <div className="content">
                <h1>Thank you for being my Valentine</h1>
                <video autoPlay muted>
                    <source src={bird} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
export default Final;