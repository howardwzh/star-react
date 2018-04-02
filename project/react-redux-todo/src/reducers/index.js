import {combineReducers} from 'redux'
import {visibilityFilter, todos} from './todos';
import home from './home';

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  home
})

export default todoApp