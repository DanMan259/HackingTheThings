//Importing Packages
import React, { Component } from 'react';
import ReactSVG from 'react-svg'
//Importing Collections


//Importing Local Components/Files
import './loginWithCoinbase.css'

//Login with coinbase Button
export default class LoginWithCoinbase extends Component {
    render() {
        return (
            <button type="button" id="loginButton-Coinbase">
                <span id="coinbaseLogo-svg"><ReactSVG path="coinbaseLogo_15_08_18.svg"/></span>
                <span id="coinbaseSignIn-Text">Sign in with Coinbase</span>
            </button>
        );
    }
}