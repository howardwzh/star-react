import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Props from './components/Props'
import SKInput from './components/SKInput'
import FSKInput from './components/FSKInput'

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
        <SKInput />
        <hr />
        <FSKInput />
      </div>
    );
  }
}

export default App;
