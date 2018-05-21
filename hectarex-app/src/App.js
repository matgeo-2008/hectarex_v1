import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import TenPro from './components/TenPro';
import Home from './components/Home';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HectareX!</h1>
        </header>
        <br />
        <Router history={history}>
          <div>
          <Route path="/" exact component={Home} />
          <Route path="/tenant" component={TenPro} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
