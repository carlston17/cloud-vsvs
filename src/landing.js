import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

class Landing extends Component {
    render () {
        return <div className ="row text-center" >
            <div className="center-block"/>
            <div className="col-xs-4"/>
            <div className="col-xs-4">
                <br/>
                <div className= "row">
                    <h1> VSVS Online Application</h1>
                </div>
                <hr/>
                <div className="row">
                    <Link to={'/individual'}> Individual Applications</Link>
                </div>
                <div className="row">
                    <Link to={'/partner'}> Partner Applications </Link>
                </div>
                <hr/>
                <h3> <a href="http://studentorgs.vanderbilt.edu/vsvs"> VSVS Website </a> </h3>
            </div>
        </div>
}}

export default withRouter(Landing);

