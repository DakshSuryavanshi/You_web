import React from "react";
import "./Logo.css";

const img = require("./you(white).jpg");

class Logo extends React.Component {
    render() {
        return (
            <div id="logo-container " className="fl w-30">
                {/* Logo needs to return to homepage */}
                <a className="nav-links" href="#">
                <img id="logo" className="grow" src={img} alt="You"/>
                &#9673;AI
                </a>
            </div>
        )
    }
}

export default Logo;