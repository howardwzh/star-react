import React from 'react'
import AppBar from 'material-ui/AppBar'

class Hello extends React.Component {
  render() {
    return (
      <AppBar
        title="Hello, World!"
        showMenuIconButton={false}
      />
    )
  }
}

export default Hello