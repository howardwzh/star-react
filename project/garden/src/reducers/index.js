import {combineReducers} from 'redux'
import {visibilityFilter, todos} from './todos';
import auth from './auth';

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  auth
})

export default todoApp