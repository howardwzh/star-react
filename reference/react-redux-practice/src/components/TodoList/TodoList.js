import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo, index) => (
              <li key={index}>
                <span>{todo.get('text')}</span>
                <button onClick={() => this.props.onDeleteTodo(index)}>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList