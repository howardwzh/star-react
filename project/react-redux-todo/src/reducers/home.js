import {FETCH_SUCCESS} from '../actions'

export default function home(state = {}, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {...state, res: `cool ${action.id}`}
    default:
      return state
  }
}