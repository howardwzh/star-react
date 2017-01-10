import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Hello from './Hello'

import '../../index.scss'

class TodoBody extends React.Component {
  constructor(props) {
    super(props)
    this.todoDom = null
    this.completeHandle = this.completeHandle.bind(this)
    this.deleteHandle = this.deleteHandle.bind(this)
    this.addHandle = this.addHandle.bind(this)
    this.state = {
      items: [{
        item: '今天要学习！',
        isCompleted: false
      }]
    }
  }

  deleteHandle (event, index) {
    event.preventDefault()
    event.stopPropagation()
    let tempItems = this.state.items.slice()
    tempItems.splice(index, 1)
    this.setState({items: tempItems})
  }

  addHandle () {
    !this.todoDom && (this.todoDom = document.getElementById('inputDom'))
    if(!this.todoDom.value){
      alert('请输入内容！')
      return
    }
    this.setState({items: this.state.items.concat([{
      item: this.todoDom.value,
      isCompleted: false
    }])})
    this.todoDom.value = ''
  }

  completeHandle (index) {
    let tempItems = this.state.items.slice()
    tempItems[index].isCompleted = !tempItems[index].isCompleted
    this.setState({items: tempItems})
  }

  render() {
    return (
      <div>
        <Hello />
        <TextField
          hintText="Please Key in todo item."
          id="inputDom"
        />
        <RaisedButton label="Primary" primary={true} onClick={this.addHandle} />
        <ul>
          {this.state.items.map((val, index) => {
            return <li key={index} onClick={() => this.completeHandle(index)} >
                      <b className={val.isCompleted ? 'is-completed' : ''}>{val.item}</b>
                      <span onClick={(event) => this.deleteHandle(event, index)}>删除</span>
                    </li>
          })}
        </ul>
      </div>
    )
  }
}

export default TodoBody