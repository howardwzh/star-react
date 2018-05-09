import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Props extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render () {
    const { title } = this.props
    return (
      <div className="props">
        {title}
      </div>
    )
  }
}

export default Props
