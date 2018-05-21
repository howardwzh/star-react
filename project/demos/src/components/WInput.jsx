import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    rules: PropTypes.array
  }

  static defaultProps = {
    value: '',
    rules: []
  }

  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value,
      errorMsg: ''
    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }

  componentDidMount () {
    this.validate(this.state.value)
  }

  /**
   * 输入处理
   * 
   * @param {event} e 
   * @memberof State
   */
  onChangeHandle (e) {
    const { value } = e.target
    this.setState({
      value
    })
    this.validate(value)
  }

  /**
   * 校验规则
   * 
   * @param {string} [value=''] 
   * @memberof WInput
   */
  validate (value = '') {
    const rules = this.props.rules || []
    const res = rules.find(r => !r.rule.test(value)) || {}

    this.setState({
      errorMsg: res.msg
    })
  }

  render () {
    const { value, errorMsg } = this.state
    return (
      <div>
        <input type="text" value={value} onChange={this.onChangeHandle} />
        <p>{errorMsg}</p>
      </div>
    )
  }
}

export default WInput
