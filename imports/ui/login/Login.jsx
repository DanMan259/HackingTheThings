//Importing Packages
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

//Importing Collections


//Importing Local Components/Files
import './login.css'

//Login Page

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

    }

    handleChange(e) {
        const val = e.target.value;
        this.setState({
            email: val
        });
    }
    handleChange2(e) {
        const val = e.target.value;
        this.setState({
            password: val
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        var emailVar = this.state.email;
        var passVar = this.state.password;
        Meteor.loginWithPassword(emailVar,passVar);
    }


    render() {
        return (
            <div>
                <div className="section" />
                <h5 className="center indigo-text">Please, login into your account</h5>
                <div className="section" />
                <div className="container center">
                    <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>
                        <form className="col s12" method="post">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input className="validate" type="email" name="email" id="login_email" autoComplete="on" value={this.state.email} onChange={this.handleChange.bind(this)} />
                                    <label htmlFor="email">Enter your email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input className="validate" type="password" name="password" id="login_password" autoComplete="on" value={this.state.password} onChange={this.handleChange2.bind(this)} />
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
                    <div className="section"/>
                </div>
            </div>
        );
    }
}