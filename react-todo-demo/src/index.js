import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoBody from './components/Todo/TodoBody'

ReactDOM.render(
  <MuiThemeProvider>
    <TodoBody></TodoBody>
  </MuiThemeProvider>, 
  document.getElementById('app')
)