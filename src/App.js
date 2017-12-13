import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Landing from './landing';
import Individual from './individual';
import Partner from './partner';

class App extends Component {
    render() {
    return <BrowserRouter>
        <div>
            <Route exact path = "/" component={Landing}/>
            <Route path="/individual" component={Individual}/>
            <Route path="/partner" component={Partner} />
        </div>
    </BrowserRouter>
  }
}

export default App;
