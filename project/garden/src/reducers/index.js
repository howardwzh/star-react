import {combineReducers} from 'redux'
import {visibilityFilter, todos} from './todos';
import home from './home';
import auth from './auth';

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  home,
  auth
})

export default todoApp