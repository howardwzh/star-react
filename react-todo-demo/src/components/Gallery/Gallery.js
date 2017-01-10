import React from 'react'
import SingleImage from './SingleImage'

let imagesData = require('../../assets/data/imagesData')

imagesData = ((imagesData) => {
  for(var i = 0, length = imagesData.length; i < length; i++){
    imagesData[i].imagesURL = require('../../assets/images/' + imagesData[i].fileName)
  }

  return imagesData
})(imagesData)

class Gallery extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div>
        {
          imagesData.map((val, key) => {
            return <SingleImage image={val} key={key}></SingleImage>
          })
        }
      </div>
    )
  }
}

export default Gallery