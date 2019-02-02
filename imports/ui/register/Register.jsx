//Importing Packages
import React, { Component } from 'react';

//Importing Collections


//Importing Local Components/Files
import './register.css'


export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="section" />
                <h5 className="center indigo-text">Register an account</h5>
                <div className="section" />
                <div className="container center">
                    <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>
                        <form className="col s12" method="post">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="name" type="text" className="validate" autoComplete="on" />
                                    <label htmlFor="name">Enter Your Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" autoComplete="off" />
                                    <label htmlFor="email">Enter Your Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="password" type="password" className="validate" autoComplete="off" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="confirmed_pass" type="password" className="validate" autoComplete="off" />
                                    <label htmlFor="confirmed_pass">Confirm Password</label>
                                </div>
                            </div>
                            <div className="row center">
                                <button type="submit" name="btn_login" className="col s12 btn btn-large waves-effect waves-light green hoverable">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="center">
                    <a href="/login" id="register-Login">Already Have an Account?</a>
                    <div className="section" />
                </div>
            </div>
        );
    }
}