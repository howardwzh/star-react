import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Props from './components/Props'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          It is cool to show some interesting demos.
        </p>
        <hr />
        <Props title="I am props" />
        <hr />
      </div>
    );
  }
}

export default App;
