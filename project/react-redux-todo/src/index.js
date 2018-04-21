import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './App'
import Todo from './containers/Todo'
import Home from './containers/Home'
import configureStore from './store/configureStore'
import sagas from './sagas/index'

const store = configureStore({})
store.runSage(sagas)

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='todo' component={Todo}></Route>
      </Route>
    </Router>
  </Provider>,
  rootElement
)