import Immutable from 'immutable'

export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    id: '',
    text: 'hello world!',
    updatedAt: '',
    completed: false,
  }
})