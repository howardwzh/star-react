import React from 'react';

class TodoHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        TodoHeader
        <input type="text" value={this.props.todo.get('text')} onChange={this.props.onChangeText} />
        <button onClick={this.props.onCreateTodo}>创建</button>
      </div>
    )
  }
}

export default TodoHeader