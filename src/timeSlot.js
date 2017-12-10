import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';

class Timeslot extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            status: this.props.status
        }
    }

    render(){
        let color = this.state.status ? '#98FB98' : '#FFFFFF'

        return <td onClick={this.onClick} bgcolor={color}>
            {this.props.time}
        </td>
    }

    onClick(){
        this.setState({
            status: !(this.state.status)
        })
        this.props.cb(this.props.id, this.props.day);
    }



}

export default withRouter(Timeslot);