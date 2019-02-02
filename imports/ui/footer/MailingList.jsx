//Importing Packages
import React, { Component } from 'react';

//Importing Collections


//Importing Local Components/Files

const styles = {
    button: {
        marginTop: 25,
    },
};

export default class MailingList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col l12 s12">
                    <form>
                        <div className="input-field col s8">
                            <input id="mailList-email" type="email" className="validate" />
                            <label htmlFor="email">Enter Your Email</label>
                        </div>
                        <div className="col s4">
                            <button type="submit" name="btn_login" className="col s12 btn btn-medium waves-effect waves-light green" style={styles.button}>Sign-Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}