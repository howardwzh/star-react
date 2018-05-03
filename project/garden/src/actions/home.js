// import fetch from 'cross-fetch'

export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export function onFetch(id) {
  return {
    type: FETCH,
    id
  }
}

export function onChangeHandle(value) {
  return {
    type: CHANGE_VALUE,
    value
  }
}
