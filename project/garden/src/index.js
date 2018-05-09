import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './App'
import Panel from './containers/panel/Panel'
import Todo from './containers/panel/Todo'
import Auth from './containers/auth/Auth'
import Login from './containers/auth/Login'
import configureStore from './store/configureStore'
import sagas from './sagas/index'

const store = configureStore({})
store.runSage(sagas)

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='panel' component={Panel}>
          <IndexRoute component={Todo}></IndexRoute>
          <Route path='todo2' component={Todo}></Route>
        </Route>
        <Route path='auth' component={Auth}>
          <IndexRoute component={Login}></IndexRoute>
        </Route>
      </Route>
    </Router>
  </Provider>,
  rootElement
)