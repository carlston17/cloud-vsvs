import React, { Component } from 'react';
import { render }   from 'react-dom';

class Landing extends Component {
    render () {
        return <div className ="row">
            <div className="center-block"/>
            <div className="col-xs-4"/>
            <div className="col-xs-4">
                <div className= "row">
                    <h1> VSVS Online Application</h1>
                </div>
                <div className="row">
                    <Link to={'/individual'}> Individual Applications</Link>
                </div>
                <div className="row">
                    <Link to={'/partner'}> Partner Applications </Link>
                </div>
            </div>
        </div>
}}

export default withRouter(Landing);

