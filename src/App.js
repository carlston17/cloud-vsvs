import React, { Component } from 'react';
import { render }   from 'react-dom';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Landing from './landing';
import Individual from './individual';
import Partner from './partner';

class App extends Component {
    render() {
    return <BrowserRouter>
        <div>
            <Route exact path = "/" component={Landing}/>
            <Route path="/individual" render{props => <Individual/>} />
            <Route path="/partner" render{props => <Partner/>} />
        </div>
    </BrowserRouter>
  }
}

render(
    <App/>,
    document.getElementById('mainDiv')
)
