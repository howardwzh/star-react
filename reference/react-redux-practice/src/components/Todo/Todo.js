import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import TodoHeaderContainer from '../../containers/TodoHeaderContainer'
import TodoListContainer from '../../containers/TodoListContainer'

class Todo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoHeaderContainer />
          <TodoListContainer />
        </div>
      </Provider>
    )
  }
}

export default Todo