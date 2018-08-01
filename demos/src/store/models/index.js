import { init } from '@rematch/core'
import { createLogger } from 'redux-logger'
import * as count from './count.js' 

const store = init({
  models: { ...count },
  redux: {
    middlewares: [createLogger()]
  }
})

export default store
