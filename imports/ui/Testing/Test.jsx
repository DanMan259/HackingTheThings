//Importing Packages
import React, { Component } from 'react';
import {HTTP} from 'meteor/http';

//Importing Collections


//Importing Local Components/Files
import './Test.css'

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
            portMax: ''
        }
    }

    componentDidMount() {
    this.getData();
    this.getData2();

    }

    getData = () =>{
        HTTP.get('data.json', null, (error, result) => {
            console.log('res', result.data);
            // console.log(error)
            this.setState({data:result.data})
        })
    };

    getData2 = () => {
        HTTP.get('data2.json', null, (error, result) => {
            console.log('res', result.data);
            // console.log(error)
            this.setState({data2:result.data})
        })
    };


    showLoader() {
        console.log("fired");
        this.setState({isLoading: true});
        this.timeOut();
    }

    timeOut()
    {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 1500);
    }

    handleChangeValue(e) {
        const val = e.target.value;
            this.setState({
                portMax: val
            });
    }

    handleChange(e) {
        const val = e.target.value;
        if (val < 1) {
            this.setState({
                portMin: ''
            });
            alert("Port Min should be more than 1! ")
        }
        else if (val > this.state.portMax) {
            this.setState({
                portMin: ''
            });
            alert("Port Min should be less than Port Max! ")
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
                            <input placeholder="Port Max" type="number" id="port_max" label="port_max" onChange={this.handleChangeValue.bind(this)} value={this.state.portMax}/>
                        </div>
                        <div className="col s12 m6 l4">
                        <input placeholder="Port Min" type="number" id="port_min" label="port_max"  onChange={this.handleChange.bind(this)} value={this.state.portMin}  />
                        </div>

                    </div>
                    <div className="col s12 m4 l2">
                        <a className="btn-floating btn-large waves-effect waves-light green" style={{ fontSize: 12 }} onClick={() => {
                            this.showLoader();
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