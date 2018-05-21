import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Props from './components/Props'
import State from './components/State'
import EnhanceExample from './components/EnhanceExample'

// redux + rematch
import { Provider } from 'react-redux'
import store from './store'
import RematchCount from './components/RematchCount'

// mobx
import { Provider as MobxProvider } from 'mobx-react'
import MobxStore from './store/mobx'
import MobxCount from './components/MobxCount'

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
        <State />
        <hr />
        <EnhanceExample />
        <hr />
        <Provider store={store}>
          <RematchCount />
        </Provider>
        <hr />
        <MobxProvider store={MobxStore}>
          <MobxCount />
        </MobxProvider>
      </div>
    );
  }
}

export default App;
