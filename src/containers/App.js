import React from "react";
import Header from "./Header";
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
                <Header />
                {/* <h1>You.AI Web app</h1> */}
            </div>
        )
    }
}


export default App;
