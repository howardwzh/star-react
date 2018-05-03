import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {onFetch, onChangeHandle} from '../actions'

class Home extends Component {
  componentDidMount() {
    this.props.onFetch('aa')
  }
  render() {
    const {onFetch, res} = this.props
    return (
      <div>
        Hello World!
        <div>{res}</div>
        <input value={res} onChange={this.onChangeHandle.bind(this)} />
        <button onClick={() => onFetch('bb')}>fetch now</button>
      </div>
    )
  }

  onChangeHandle(e) {
    const {onChangeHandle} = this.props
    onChangeHandle(e.target.value)
  }
}

const mapStateToProps = (state) => {
  return {
    res: state.home.res
  }
}
const mapDispatchToProps = {
  onFetch,
  onChangeHandle
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(Home)


