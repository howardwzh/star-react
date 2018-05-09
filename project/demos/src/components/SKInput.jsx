import React, { Component } from 'react'

class SKInput extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }

  onChangeHandle (e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    const { value } = this.state
    console.log('render')
    return (
      <div className="sk-input">
        <input value={value} onChange={this.onChangeHandle} />
      </div>
    )
  }
}

export default SKInput
