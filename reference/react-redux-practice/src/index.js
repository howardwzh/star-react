import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from './components/Main'
import Home from './components/Home'
import Todo from './components/Todo'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/todo" component={Todo} />
    </Route>
  </Router>,
  document.getElementById('app'))