import React, { Component } from 'react';
import './App.css';
import AnimatePhoto from './AnimatePhoto';
import MusicPlayer from './MusicPlayer';
import data from './animate-config.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimatePhoto data={data}/>
        <MusicPlayer/>
      </div>
    );
  }
}

export default App;
