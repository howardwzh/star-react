import React from 'react'
import PropTypes from 'prop-types'
// 因为变量路径不能直接require进来，所以采用require.context
// 缺点是：如果images里有冗余图片，webpack也会打包进来
const images = require.context('./images', true, /\.webp|jpg|png|gif$/)

class WebpImage extends React.Component {
  static propTypes = {
    imgSrc: PropTypes.string
  }

  static defaultProps = {
    imgSrc: ''
  }

  imgSrcHandle (webp = '') {
    const imgName = this.props.imgSrc.replace(/.*\/images\//, '')
    return images(`./${imgName}${webp}`)
  }

  render () {
    const { imgSrc } = this.props
    console.log(imgSrc)
    // require(`${imgSrc}.webp`)
    // require(imgSrc)
    return (
      <picture className="picture">
        <source type="image/webp" srcSet={this.imgSrcHandle('.webp')} />
        <img className="image" src={this.imgSrcHandle()} alt="" />
      </picture>
    )
  }  
}

export default WebpImage
