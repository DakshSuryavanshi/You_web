import React from "react";
import "./Account.css";

// This needs to be a webpage on its own!

const Account = ({onRouteChange}) => {
    return (
        <div className="fl w-10 button-space">
            <a href="#">
            <span onClick={() => onRouteChange('signin')} id="account-icon" className="ba">Sign In Page</span>
            </a>
        </div>
    )
}

export default Account;