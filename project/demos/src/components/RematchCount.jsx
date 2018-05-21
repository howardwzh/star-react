import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class RematchCount extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func
  }
  static defaultProps = {
    count: 0,
    increment: () => {}
  }
  render () {
    const { count, increment } = this.props
    return (
      <div>
        <button onClick={() => increment(3)}>加3</button>
        <p>{count}</p>
      </div>
    )
  }
}

const mapState = state => ({
  count: state.count
})

const mapDispatch = dispatch => ({
  increment: num => dispatch.count.increment(num)
})

export default connect(mapState, mapDispatch)(RematchCount)
