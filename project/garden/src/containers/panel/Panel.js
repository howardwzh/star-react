import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Layout} from 'antd'
const {Sider} = Layout

import LeftNav from './LeftNav';

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <Layout style={{minHeight: '100vh'}}>
          <Sider><LeftNav /></Sider>
          <Layout>{this.props.children}</Layout>
        </Layout>
      </div>
    )
  }
}
Panel.propTypes = {
  children: PropTypes.any
}

export default Panel