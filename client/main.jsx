//Importing Packages
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importing Collections


//Importing Local Components/Files
import Header from '../imports/ui/header/Header'
import Footer from '../imports/ui/footer/Footer'
import Home from '../imports/ui/landingPage/Home';
import Login from '../imports/ui/login/Login';
import Register from "../imports/ui/register/Register";
import FinishRegister from "../imports/ui/register/thirdParty/FinishRegister";
import Lost from '../imports/ui/notFound/Lost';


//Loads the Components from each of the files and brings to the page


//This loads the pages on startup to the 'render-target' div
//from main.html

Meteor.startup(() => {
    render((
        <div id="body">
            <div><Header /></div>
            <div id="main">
                <Router>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route path='/login' component={ Login }/>
                        <Route exact path='/register' component={ Register }/>
                        <Route path='/register/:service' component={ FinishRegister }/>
                        <Route component={ Lost }/>
                    </Switch>
                </Router>
            </div>
            <div><Footer /></div>
        </div>
    ), document.getElementById('render-target'));
});