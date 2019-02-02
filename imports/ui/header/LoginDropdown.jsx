//Importing Packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

//Importing Collections

//Importing Local Components/Files

//Sign In / Dropdown Account info

export default class LoginDropdown extends Component {
    /*componentDidMount(){
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
        Blaze.remove(this.view);
    }

    render() {
        return <span ref="container" />;
    }*/
    render() {
        return <span ref="container"><a href="/login" id="secondFooter-1">Login</a></span>;
    }
}