

import {fork, all} from 'redux-saga/effects'


import * as home from './home'
import * as auth from './auth'

// 在这里添加自启动后发起的saga
const reduxSagas = [
  home,
  auth
]

// 返回fork 包装的数组
function getTasks(sagas) {
  let forkSaga = []
  sagas.map((saga) => {
    const values = Object.values(saga)
    const forks = values.map(v => fork(v))
    forkSaga = forkSaga.concat(forks)
    return null
  })
  return forkSaga
}

export default function* root() {
  yield all(getTasks(reduxSagas))
}
