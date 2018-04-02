import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {onFetch, FETCH_SUCCESS} from '../actions'

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
        <button onClick={() => onFetch('bb')}>fetch now</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    res: state.home.res
  }
}
const mapDispatchToProps = {
  onFetch
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(Home)


