import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.onDeleteTodo = this.props.onDeleteTodo.bind(this)
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo, index) => (
              <li key={index}>
                <span>{todo.get('text')}</span>
                <button onClick={() => this.onDeleteTodo(index)}>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList