//Importing Packages
import React, { Component } from 'react';

//Importing Collections


//Importing Local Components/Files
import MailingList from './MailingList'

//CSS Attributes
const styles = {
    firstSecion: {
        complete:{
            display: 'flex',
            flexWrap: 'wrap',
        },
        text: {
            paddingTop: 100,
        },
        logo: {
            paddingTop: 100,
        },
    },
    secondSection: {
        complete: {
            paddingLeft: 30,
            paddingTop: 20,
        },
    },
    fourthSection: {
        complete: {
            paddingTop: 40,
        },
    },
    bottomRow: {
        complete: {
            paddingBottom: 25,
        },
        section: {
            paddingTop: 0,
        },
    },
};



export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer grey darken-4">
                <div className="row">
                    <div className="col l3 s3">
                        <div className="container">
                            <h2 className="white-text" style={styles.firstSecion.complete}><img src="testLogo.png" style={styles.firstSecion.logo} /> <div style={styles.firstSecion.text}>Hackin</div></h2>
                        </div>
                    </div>
                    <div className="col l3 s3">
                        <div className="container">
                            <ul style={styles.secondSection.complete}>
                                <li><a className="white-text">The Project</a></li>
                                <br />
                                <li><a href="/" className="grey-text text-lighten" id="secondFooter-1">Home</a></li>
                                <li><a href="#" className="grey-text text-lighten" id="secondFooter-2">Blog</a></li>
                                <li><a href="#" className="grey-text text-lighten" id="secondFooter-3">FAQ</a></li>
                                <li><a href="#" className="grey-text text-lighten" id="secondFooter-4">Contact</a></li>
                                <li><a href="#" className="grey-text text-lighten" id="secondFooter-5">About</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l1 s1">
                        <div className="container footer-icons">
                            <ul>
                                <li><a href="#" className="fa fa-facebook" id="Footer-Facebook"/></li>
                                <li><a href="#" className="fa fa-twitter" id="Footer-Twitter"/></li>
                                <li><a href="#" className="fa fa-google-plus" id="Footer-GooglePlus"/></li>
                                <li><a href="#" className="fa fa-linkedin" id="Footer-Linkedin"/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l5 s5">
                        <div className="container" style={styles.fourthSection.complete}>
                            <a className="white-text">Stay Connected</a>
                            <p className="grey-text text-lighten-1">Join our Mailing List to stay up to date with our Newsletters. Also Connect with us on our socials</p>
                            <MailingList/>
                        </div>
                    </div>
                </div>

                <hr width="95%" style={{borderColor: 'grey'}} />
                <div className="footer center grey-text text-lighten-1">
                    <div className="section" style={styles.bottomRow.section}/>
                    <div className="container" style={styles.bottomRow.complete}>
                        <a className="grey-text text-lighten-1" href="#" id="bottomRow-1">Privacy Policy </a>
                        |
                        <a className="grey-text text-lighten-1" href="#" id="bottomRow-2"> Site Map </a>
                        | © {new Date().getFullYear()} HackingTheThings - All Rights Reserved
                    </div>
                </div>
            </footer>
        );
    }
}

