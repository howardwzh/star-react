import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'

import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}></Route>
    </Router>
  </Provider>,
  rootElement
)