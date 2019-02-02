//Importing Packages
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import  { Redirect } from 'react-router-dom'

//Importing Collections


//Importing Local Components/Files
import Lost from '../../notFound/Lost';


export default class FinishRegister extends Component {


    componentDidMount(){
        this.computation = Tracker.autorun(() => {
            if (Meteor.user() !== undefined) {
                this.setState({
                    user: Meteor.user(),
                });
            }
        });
    }

    //This should be set state
    /*
    logValue() {
        if (Meteor.user()){
            user = Meteor.user();
            return !(user.profile.completeRegister)
        }else {
            return false;
        }
    }*/

    logValue(){
        console.log(this.state.user);
        return this.state.user
    }


    serviceCheck(service){
        Meteor.call('finishRegister',service,(error, result) => {
            if (error) {
                alert(error);
            } else {
                return result;
            }
        });
    }


    lowerCasing(){
        return this.props.match.params.service.toLowerCase();
    }

    serviceName(){
        return this.lowerCasing().charAt(0).toUpperCase() + this.lowerCasing().slice(1);
    }

    //The top level if statement could be changed to maybe redirect the user to a login page if neccesary if the right state
    render() {
        if (true){
            if (this.serviceCheck(this.lowerCasing())){
                return (
                    <div>
                        <div className="section" />
                        <h5 className="center indigo-text">Finish registration with {this.serviceName()}</h5>
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
                    </div>
                );
            }else{
                return <Lost/>
            }
        }else {
            return <Redirect to='/login' />
        }
    }
}
