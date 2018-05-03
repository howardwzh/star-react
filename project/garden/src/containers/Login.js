import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {onLogin, onChangeName} from '../actions'

class Login extends Component {
  componentDidMount() {
  }
  render() {
    const {onLogin, name, tip} = this.props
    return (
      <div>
        Login
        <div>{name}</div>
        <input value={name} onChange={this.onChangeHandle.bind(this)} />
        <p>{tip}</p>
        <button onClick={() => onLogin('bb')}>fetch now</button>
      </div>
    )
  }

  onChangeHandle(e) {
    const {onChangeName} = this.props
    onChangeName(e.target.value)
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    tip: state.auth.tip
  }
}
const mapDispatchToProps = {
  onLogin,
  onChangeName
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(Login)


