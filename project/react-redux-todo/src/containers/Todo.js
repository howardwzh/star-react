import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class Todo extends Component {
  render() {
    // Injected by connect() call:
    const {dispatch, visibleTodos, visibilityFilter, onAddClickHandle, onTodoClickHandle, onFilterChangeHandle} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            onAddClickHandle(text)
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            onTodoClickHandle(index)
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => 
            onFilterChangeHandle(nextFilter)
          } />
      </div>
    )
  }
}

Todo.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClickHandle: (...args) => {
      dispatch(addTodo(...args))
    },
    onTodoClickHandle: (...args) => {
      dispatch(toggleTodo(...args))
    },
    onFilterChangeHandle: (...args) => {
      dispatch(setVisibilityFilter(...args))
    }
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select, mapDispatchToProps)(Todo)