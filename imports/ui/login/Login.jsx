//Importing Packages
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

//Importing Collections


//Importing Local Components/Files
import LoginWithGoogle from './SignIn-Buttons/google/LoginWithGoogle'
import LoginWithCoinbase from './SignIn-Buttons/coinbase/LoginWithCoinbase'
import './login.css'

//Login Page

export default class Login extends Component {

    googleRedirect(){
        Meteor.loginWithGoogle()((error) => {
            if (error) {
                Session.set('errorMessage', error.reason || 'Unknown error');
            }
        });
    }

    coinbaseRedirect(){
        Meteor.loginWithCoinbase({
            requestPermissions: ['wallet:transactions:read,wallet:user:email']
        }, (error) => {
            if (error) {
                Session.set('errorMessage', error.reason || 'Unknown error');
            }
        });
    }

    render() {
        return (
            <div>
                <div className="section" />
                <h5 className="center indigo-text">Please, login into your account</h5>
                <div className="section" />
                <div className="container center">
                    <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>
                        <LoginWithGoogle onClick={this.googleRedirect.bind(this)}/>
                        <br />
                        <br />
                        <LoginWithCoinbase onClick={this.coinbaseRedirect.bind(this)}/>
                        <br />
                        <form className="col s12" method="post">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input className="validate" type="email" name="email" id="login_email" autoComplete="on"/>
                                    <label htmlFor="email">Enter your email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input className="validate" type="password" name="password" id="login_password" autoComplete="on"/>
                                    <label htmlFor="password">Enter your password</label>
                                </div>
                                <label style={{float: 'right', paddingRight: 10}}>
                                    <a className="pink-text" id="forgetPassword" href="#!"><b>Forgot Password?</b></a>
                                </label>
                            </div>
                            <br />
                            <div className="row center">
                                <button type="submit" name="btn_login" className="col s12 btn btn-large waves-effect waves-light green hoverable">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="center">
                    <a href="/register" id="login-Register">Need an account?</a>
                    <div className="section" />
                </div>
            </div>
        );
    }
}