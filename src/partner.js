import React, { Component } from 'react';
import { render }   from 'react-dom';
import {Link, withRouter} from 'react-router';

class Partner extends Component {
    render(){
        return <div>
            <p>Partner Page</p>
        </div>
    }
}

export default withRouter(Partner);