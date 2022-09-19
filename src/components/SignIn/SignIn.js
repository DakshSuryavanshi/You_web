import React from "react";
import "./SignIn.css";

// This needs to be a webpage on its own!

class SignIn extends React.Component {
    render() {
        return (
            <div className="button-space">
                <a href="#">
                <span id="SignInButton" className="ba">Sign In</span>
                </a>
            </div>
        )
    }
}

export default SignIn;