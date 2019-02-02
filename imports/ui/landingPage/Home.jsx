//Importing Packages
import React, { Component } from 'react';

//Importing Collections


//Importing Local Components/Files



//Front Page Default Completely Copy Pasted

export default class Home extends Component {
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div className="section no-pad" id="index-banner">
                    <div className="first-section">
                        <div className="container">
                            <br /><br />
                            <h1 className="header center white-text">Starter Template</h1>
                            <div className="row center">
                                <h5 className="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>
                            </div>
                            <div className="row center">
                                <a href="#" id="download-button" className="btn-large waves-effect waves-light green hoverable">Get Started</a>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="information">
                    <div className="container">
                        <div className="section">
                            <div className="row">
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center light-blue-text"><i className="large material-icons">flash_on</i></h2>
                                        <h5 className="center">Speeds up development</h5>
                                        <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center light-blue-text"><i className="large material-icons">group</i></h2>
                                        <h5 className="center">User Experience Focused</h5>
                                        <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center light-blue-text"><i className="large material-icons">settings</i></h2>
                                        <h5 className="center">Easy to work with</h5>
                                        <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n        .first-section {\n            background-image: url('https://images.unsplash.com/photo-1455459182396-ae46100617cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c33d978e689cb3694d63c490186edd6&auto=format&fit=crop&w=2378&q=80');\n            background-size: 100% 100%;\n        }\n    " }} />
            </div>

        );
    }
}