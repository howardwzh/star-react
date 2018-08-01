import React from 'react'
import Enhance from './Enhance'

class EnhanceExample extends React.Component {
  render () {
    const OriginalTitle = (({ title }) => <h1>{title}</h1>)
    const EnhanceElement = Enhance(OriginalTitle)
    return (
      <EnhanceElement data="I am data" />
    )
  }
}

export default EnhanceExample
