import { init } from '@rematch/core'
import { createLogger } from 'redux-logger'
import * as models from './models'

const store = init({
  models,
  redux: {
    middlewares: [createLogger()]
  }
})

export default store
