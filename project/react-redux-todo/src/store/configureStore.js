import {createStore, applyMiddleware} from 'redux';
import 'regenerator-runtime/runtime'
import createSagaMiddleware, {END} from 'redux-saga'
import {createLogger} from 'redux-logger'
import allApp from '../reducers/index'

export default function configureStore(initState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(allApp, initState, applyMiddleware(
    sagaMiddleware,
    createLogger()
  ))
 
  store.runSage = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}