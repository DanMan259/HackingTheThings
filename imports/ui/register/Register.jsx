//Importing Packages
import React, { Component } from 'react';

//Importing Collections


//Importing Local Components/Files
import './register.css'
import {Meteor} from "meteor/meteor";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            profile: {
                name: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password,
            profile: {
                name: event.target.name,
            },
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        Meteor.call('insertUser', this.state,
            (err) => {
                if (err) {
                    alert(err);
                }
            }
        )
    }

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
                                    <input id="name" type="text" className="validate" autoComplete="on" value={this.state.profile.name} onChange={this.handleChange}/>
                                    <label htmlFor="name">Enter Your Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" autoComplete="off" value={this.state.email} onChange={this.handleChange}/>
                                    <label htmlFor="email">Enter Your Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="password" type="password" className="validate" autoComplete="off" value={this.state.password} onChange={this.handleChange}/>
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