import React from "react";
import Logo from "../components/Logo/Logo";
import Navbar from "../components/Navbar/Navbar";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo />
                <Navbar />
            </header>
        )
    }
}

export default Header;