function reducer(state = {
  comments: [{
    text: '你好，访问者',
    name: '访问者',
    time: '2016-12-10'
  }]
}, action) {
  switch (action.type) {
    case 'add':
      return {
        comments: [...state.comments, {
          name: action.name,
          text: action.text,
          time: action.time
        }]}
    default:
      return state
  }
}

export default reducer
