import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

class MobxCount extends Component {
  static propTypes = {
    store: PropTypes.any
  }
  static defaultProps = {
    store: null
  }
  render () {
    const {
      count, increment, Total, fetchSomeThing 
    } = this.props.store
    return (
      <div>
        <button onClick={() => increment(3)}>加3</button>
        <button onClick={() => fetchSomeThing()}>异步请求数值</button>
        <p>{count}</p>
        <p>{Total}</p>
      </div>
    )
  }
}

export default inject('store')(observer(MobxCount))
