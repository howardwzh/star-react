import {FETCH_SUCCESS, SET_NEW_NAME, SHOW_TIP} from '../actions'

export default function home(state = {name: ''}, action) {
  switch (action.type) {
    case SET_NEW_NAME:
      return {...state, name: action.name, tip: ''}
    case SHOW_TIP:
      return {...state, tip: action.tip}
    default:
      return state
  }
}