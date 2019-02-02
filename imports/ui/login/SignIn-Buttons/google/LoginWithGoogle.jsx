//Importing Packages
import React, { Component } from 'react';
import ReactSVG from 'react-svg'

//Importing Collections


//Importing Local Components/Files
import './loginWithGoogle.css'

//Login with google Button
export default class LoginWithGoogle extends Component {
    render() {
        return (
            <button type="button" id="loginButton-Google">
                <span id="googleLogo-svg"><ReactSVG path="googleLogo_15_08_18.svg"/></span>
                <span id="googleSignIn-Text">Sign in with Google</span>
            </button>
        );
    }
}

//className="col s12 btn btn-medium waves-effect waves-light white black-text hoverable"