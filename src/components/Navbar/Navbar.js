import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    render () {
        return (
            <nav id="navbar">
                <span id="nav-1" className="fl w-10"><a className="nav-links" href="#">Home</a></span>
                <span id="nav-2" className="fl w-10"><a className="nav-links" href="#">About</a></span>
                <span id="nav-3" className="fl w-10"><a className="nav-links" href="#">Services</a></span>
                <span id="nav-4" className="fl w-10"><a className="nav-links" href="#">Contact</a></span>
            </nav>
        )
    }
}

export default Navbar;