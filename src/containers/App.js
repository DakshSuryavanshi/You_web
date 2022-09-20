import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Tiles from "../components/Tiles/Tiles";
// import SignIn from "../components/SignIn/SignIn";
import 'tachyons';
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
                <div class="cf ph2-ns">
                <Header />
                <Navbar />
                </div>
                {/* <h1>You.AI Web app</h1> */}
                <Tiles />
            </div>
        )
    }
}


export default App;
