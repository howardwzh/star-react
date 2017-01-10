import React from 'react'

const basePath = '../../assets/images/'
const imageStyle = {
  width: "200px"
}

class SingleImage extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div>
        <img src={this.props.image.imageURL} alt={this.props.image.title} style={imageStyle}/>
        <h5>{this.props.image.title}</h5>
        <p>{this.props.image.desc}</p>
      </div>
    )
  }
}

export default SingleImage