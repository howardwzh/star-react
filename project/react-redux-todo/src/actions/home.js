// import fetch from 'cross-fetch'

export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export function onFetch(id) {
  return {
    type: FETCH,
    id
  }
}
