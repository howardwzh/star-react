import React from 'react'

const enhanceComponent = Component => class Enhance extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Component
        {...this.props}
        title="title is me"
      />
    )
  }
}

export default enhanceComponent
