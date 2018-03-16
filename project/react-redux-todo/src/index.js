import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'

import App from './App'
import Todo from './containers/Todo'
import todoApp from './reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='todo' component={Todo}></Route>
      </Route>
    </Router>
  </Provider>,
  rootElement
)