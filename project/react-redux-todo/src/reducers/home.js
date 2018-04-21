import {FETCH_SUCCESS, CHANGE_VALUE} from '../actions'

export default function home(state = {res: ''}, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {...state, res: action.name}
    case CHANGE_VALUE:
      return {...state, res: action.value}
    default:
      return state
  }
}