import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions'

function* getSomething(action) {
  const p = /^[a-zA-Z]+$/
  if (p.test(action.value)) {
    yield put({
      type: actions.SET_NEW_NAME,
      name: action.value
    })
  } else {
    yield put({
      type: actions.SHOW_TIP,
      tip: '只能输入字母！'
    })
  }
}

export function* watchGetSomething() {
  yield takeEvery(actions.CHANGE_NAME, getSomething)
}