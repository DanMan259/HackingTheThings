//Importing Packages
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importing Collections


//Importing Local Components/Files
import Header from '../imports/ui/header/Header'
import Footer from '../imports/ui/footer/Footer'
import Lost from '../imports/ui/notFound/Lost';
import Test from '../imports/ui/Testing/Test';


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
                        <Route exact path='/' component={ Test }/>
                        <Route component={ Lost }/>
                    </Switch>
                </Router>
            </div>
            <div><Footer /></div>
        </div>
    ), document.getElementById('render-target'));
});