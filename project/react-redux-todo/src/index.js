import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'


import App from './App'
import Todo from './containers/Todo'
import Home from './containers/Home'
import configureStore from './store/configureStore'
import sagas from './sagas/index'

let store = configureStore({})

store.runSage(sagas)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='todo' component={Todo}></Route>
        <Route path='home' component={Home}></Route>
      </Route>
    </Router>
  </Provider>,
  rootElement
)