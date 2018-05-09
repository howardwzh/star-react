import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Auth extends Component {
  render() {
    return <div>{ this.props.children }</div>
  }
}
Auth.propTypes = {
  children: PropTypes.any
}

export default Auth