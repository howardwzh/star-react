import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions'

function someFetchFn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: 'howard'})
      console.log('ok')
    }, 1000)
  })
}

function* getSomething(action) {
  const some = yield call(someFetchFn, {
    phone: action.phone
  })
  yield put({
    type: actions.FETCH_SUCCESS,
    name: some.name
  })
}

export function* watchGetSomething() {
  yield takeEvery(actions.FETCH, getSomething)
}