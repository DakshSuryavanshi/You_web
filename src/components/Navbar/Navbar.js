import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar">
                <ul id="navlist">
                    <li id="first">Option1</li>
                    <li id="second">Option2</li>
                    <li id="third">Option3</li>
                    <li id="last">Option4</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;