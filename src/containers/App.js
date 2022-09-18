import React from "react";
import Logo from "../components/Logo/Logo";
import Navbar from "../components/Navbar/Navbar";
import 'bootstrap';
import "./App.css";



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container">
                <Logo />
                <Navbar />
                <h1>You.AI Web app</h1>
            </div>
        )
    }
}


export default App;
