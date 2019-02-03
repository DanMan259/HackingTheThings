//Importing Packages
import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";

//Importing Collections


//Importing Local Components/Files
import './test.css'


//Global Variables
let root = "https://www.exploit-db.com/exploits/";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: null,
            data2: null,
            portMin: '',
            portMax: '',
            showButton:false,
            ip:'',
            portstring:''
        }
    }

    componentDidMount() {
        this.getExploitData();
        this.getPortData();
        this.secureLine();
    }

    getExploitData = (ipString,portString) =>{
        Meteor.call('exploitRequest', ipString, portString, (error, result) => {
            if (error) {
                console.log('Error');
            } else {
                this.setState({ data2 : result });
            }
        });
    };

    getPortData = (ipString,portString) =>{
        Meteor.call('portRequest', ipString, portString, (error, result) => {
            if (error) {
                console.log('Error');
            } else {
                this.setState({ data : result });
            }
        });
    };
    secureLine = () => {
        Meteor.call('secureRequest', (error, result) => {
            if (error) {
                console.log('Error');
            }
        })
    };

    printIp (){
        let s = document.getElementById('ip_address').value;
        let p1 = document.getElementById('port_min').value;
        let p2 = document.getElementById('port_max').value;

        this.setState({ip:s})
        this.setState({portMin:p1})
        this.setState({portMax:p2})

        if(p1 == p2){
            this.setState({portString:p1})
        }else {
            this.setState({portString:str(p1) + '-' +str(p2)})
        }

        console.log(s);
    }
    showLoader() {
        console.log("fired");
        this.setState({isLoading: true});
        this.timeOut();
    }

    showButton() {
        console.log("fired");
        this.setState({showButton: true});
    }

    timeOut()
    {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 1500);
    }

    handleChangeValue(e) {
        const val = e.target.value;

        if (val < this.state.portMin) {
            this.setState({
                portMin: '',
                portMax:''
            });
            alert("Port Min should be less than Port Max! ")
        }
        else{
            this.setState({
                portMax: val
            });
        }
    }

    handleChange(e) {
        const val = e.target.value;
        if (val < 1) {
            this.setState({
                portMin: ''
            });
            alert("Port Min should be more than 1! ")
        }
        else{
            this.setState({
                portMin: val
            });
        }


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {console.log('state', this.state)}
                    <div className="col s12">

                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l1"/>
                    <div className="col s12 m4 l10">
                        <input placeholder="IP Address" id="ip_address" label="IP Address" />
                    </div>
                    <div className="col s12 m4 l1">

                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m4 l2"/>
                    <div className="col s12 m4 l8">
                        <div className="col s12 m6 l4">
                            <input placeholder="Port Min" min={1} max={$("#port_max").val()} type="number" id="port_min" label="port_max"  onChange={this.handleChange.bind(this)} value={this.state.portMin}  />
                        </div>
                        <div className="col s12 m6 l4">
                            <input placeholder="Port Max" min={$("#port_min").val()} max={65535} type="number" id="port_max" label="port_max" onChange={this.handleChangeValue.bind(this)} value={this.state.portMax}/>
                        </div>

                        {this.state.showButton ? (
                        <div className="col s12 m6 l4">
                            <a className="waves-effect waves-light btn-large green" style={{ fontSize: 10}}>
                                Secure The Device
                            </a>
                        </div>) : undefined}


                    </div>
                    <div className="col s12 m4 l2">
                        <a className="btn-floating btn-large waves-effect waves-light green" style={{ fontSize: 11 }} onClick={() => {
                            this.showLoader(), this.showButton(), this.printIp();
                        }}>
                            Search
                        </a>
                    </div>
                </div>


                <div className="row">
                    <div className="col s12 m4 l2"/>
                    <div className="col s12 m4 l8">
                        {this.state.isLoading ? (<div className="progress">
                            <div className="indeterminate"></div>
                        </div>) : undefined}

                    </div>
                    <div className="col s12 m4 l1"/>
                </div>

                {/*table1*/}
                <div className="row">
                    <div className="col s12 m4 l1"/>
                    <div className="card green darken-1 col s12 m4 l10">
                            <div className="card-content white-text">
                                <span id="title1" className="card-title">Port Result</span>
                                {/*<span className="card-title">Card Title</span>*/}
                                <table className="highlight responsive-table">
                                    <thead>
                                    <tr>
                                        <th>Port No</th>
                                        <th>Protocol</th>
                                        <th>State</th>
                                        <th>Reason</th>
                                        <th>Service</th>
                                    </tr>
                                    </thead>
                                    {this.state.data &&
                                    <tbody>

                                    {this.state.data['port'].map((dataItem, index) => {
                                        return (
                                            <tr key={index} id='highlight'>
                                                <td>{dataItem['portid']}</td>
                                                <td>{dataItem['protocol']}</td>
                                                <td>{dataItem['state']}</td>
                                                <td>{dataItem['reason']}</td>
                                                <td>{dataItem['service']}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                    }

                                </table>
                        </div>
                    </div>
                    <div className="col s12 m4 l1"/>
                </div>

                <div className="row">
                    {console.log('state', this.state)}
                    <div className="col s12">

                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m4 l1"/>
                    <div className="card green darken-1 col s12 m4 l10">
                        <div className="card-content white-text">
                            <span id="title1" className="card-title">Exploit Result</span>
                            {/*<span className="card-title">Card Title</span>*/}

                            <table className="responsive-table">
                                <tbody>
                                    {this.state.data2 &&
                                    <tr>
                                        <td>

                                    {this.state.data2['sample'].map((dataItem, index) => {
                                        return (
                                                <table key={index}>
                                                    <tbody>
                                                    <tr id="heading1"><td>{dataItem['SEARCH']}</td></tr>
                                                        {dataItem['RESULTS_EXPLOIT'].map((dataItem, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td id="space2">
                                                                        <table>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="space2">
                                                                                        <a href={root.concat(dataItem['EDB-ID'])} target="_blank" rel="noopener noreferrer">
                                                                                            <table id="highlight">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td id="space"><strong> Title: </strong>{dataItem['Title']}</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td id="space"><strong> Exploit Database ID: </strong>{dataItem['EDB-ID']}</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td id="space"><strong> Date: </strong>{dataItem['Date']}</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td id="space"><strong> Author: </strong>{dataItem['Author']}</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td id="space"><strong> Type: </strong>{dataItem['Type']}</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td id="space"><strong> Platform: </strong>{dataItem['Platform']}</td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                        )
                                    })}
                                        </td>
                                    </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col s12 m4 l1"/>
                </div>
            </div>
        );
    }
}