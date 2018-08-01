import React, { PureComponent } from 'react'
import WInput from './WInput'

class State extends PureComponent {
  constructor () {
    super()
    this.state = {
      name: 'aaa',
      password: 'bbbbbb'
    }
    this.onNameChange = this.onChangeHandle.bind(this, 'name', [{ rule: /^\d+$/, msg: '必需是数字' }, { rule: /^\d{5}$/, msg: '必需是5位数字' }])
    this.onPasswordHandle = this.onChangeHandle.bind(this, 'password', [{ rule: /^[a-z]+$/, msg: '必需是字母' }, { rule: /^[a-z]{5}$/, msg: '必需是5个字母' }])
  }

  componentDidMount () {
    this.onNameChange()
    this.onPasswordHandle()
  }

  /**
   * 输入处理
   * 
   * @param {event} e 
   * @memberof State
   */
  onChangeHandle (key, rules = [], e) {
    const value = e ? e.target.value : this.state[key] 
    const res = rules.find(r => !r.rule.test(value)) || {}
    console.log(res.msg)
    this.setState({
      [key]: value
    })
  }

  render () {
    const { name, password } = this.state
    return (
      <div>
        <WInput value={name} rules={[{ rule: /^\d+$/, msg: '必需是数字' }, { rule: /^\d{5}$/, msg: '必需是5位数字' }]} />
        <input type="text" value={name} onChange={this.onNameChange} />
        <input type="password" value={password} onChange={this.onPasswordHandle} />
      </div>
    )
  }
}

export default State
