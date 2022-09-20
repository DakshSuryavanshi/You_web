import React from "react";
import "./Header.css";

const img = require("./you(white).jpg");

class Header extends React.Component {
    render() {
        return (
            <header id="header" className="fl w-30">
                {/* Header needs to return to homepage */}
                <a className="nav-links" href="#">
                <img id="logo" className="grow" src={img} alt="You"/>
                &#9673;AI
                </a>
            </header>
        )
    }
}

export default Header;