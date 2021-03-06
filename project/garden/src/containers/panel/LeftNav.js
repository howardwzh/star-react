import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
// const {SubMenu} = Menu

class LeftNav extends Component {
  clickMenuHandle(e) {
    window.location.href = e.item.props.hash
  }
  render() {
    return (
      <div className="left-nav">
        <Menu
          defaultSelectedKeys={['1']}
          onClick={this.clickMenuHandle}
        >
          <Menu.Item key="1" hash="#/panel">
            <Icon type="mail" />
          Navigation One
          </Menu.Item>
          <Menu.Item key="2" hash="#/panel/todo2">
            <Icon type="calendar" />
          Navigation Two
          </Menu.Item>
          {/* <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    )
  }
}

export default LeftNav