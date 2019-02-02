//Importing Packages
import React, { Component } from 'react';

//Importing Collections


//Importing Local Components/Files



export default class FinishGoogle extends Component {
    render() {
        return (
            <div>
                <div className="section" />
                <h5 className="center indigo-text">Finish registration with Google</h5>
                <div className="section" />
                <div className="container center">
                    <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>
                        <form className="col s12" method="post">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input defaultValue="{{userProfile.profile.name}}" id="name" type="text" className="validate" autoComplete="on" />
                                    <label className="active" htmlFor="name">Enter Your Name</label>
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
                    <a onclick="loginAnother()">Already Have an Account?</a>
                </div>
                <div className="section" />
                <style dangerouslySetInnerHTML={{__html: "\n        body > div.content > div:nth-child(2) > div:nth-child(5) > a:hover {\n            opacity: 0.5;\n        }\n    " }} />
            </div>
        );
    }
}