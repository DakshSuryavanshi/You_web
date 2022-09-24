import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Tiles from "../components/Tiles/Tiles";
import Account from "../components/Account/Account";
import SignInForm from "../components/SignInForm/SignInForm";
import 'tachyons';
import "./App.css";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            route: 'home'
            // route: 'signin'
        }
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        return (
            <div id="App">
            {this.state.route === "home" ? 
                    <React.Fragment>
                    <div class="cf ph2-ns">
                    <Header />
                    <Navbar />
                    <Account onRouteChange={this.onRouteChange}/>
                    </div>
                    {/* <h1>You.AI Web app</h1> */}
                    <Tiles />
                    </React.Fragment>
                    : this.state.route === "signin" ? 
                    <SignInForm /> : <div>Bie</div>
                }
            </div>
        )
    }
}


export default App;
