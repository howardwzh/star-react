// import fetch from 'cross-fetch'

export const LOGIN = 'LOGIN';
export const CHANGE_NAME = 'CHANGE_NAME';
export const SET_NEW_NAME = 'SET_NEW_NAME';
export const SHOW_TIP = 'SHOW_TIP'

export function onLogin(id) {
  return {
    type: LOGIN,
    id
  }
}

export function onChangeName(value) {
  return {
    type: CHANGE_NAME,
    value
  }
}
