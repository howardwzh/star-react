import React, { Component } from 'react'

class FSKInput extends Component {
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
    return (
      <div className="sk-input">
        <input defaultValue={value} onChange={this.onChangeHandle} />
      </div>
    )
  }
}

export default FSKInput
