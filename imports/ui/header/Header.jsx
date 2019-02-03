//Importing Packages
import React, { Component } from 'react';

//Importing Collections

//Importing Local Components/Files


const styles = {
    combo:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    logo:{
        paddingTop: 2,
        paddingTop: 2,
        width: '100px',
        height: '60px'
    }

};


//Header Code

export default class Header extends Component {
    render() {
        return (
            <nav className="green center brand-logo">
                <a href="/" className="center brand-logo" style={styles.combo}>
                    <img src="app_logo.png" style={styles.logo}/>
                </a>
            </nav>
        );
    }
}
