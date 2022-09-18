import React from "react";
import "./Logo.css";

const img = require("./you(white)2.jpg");

class Logo extends React.Component {
    render() {
        return (
            <div className="img-container">
                <img className="logo" src={img} alt="You.AI"/>
            </div>
        )
    }
}

export default Logo;