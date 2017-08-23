const data = [{
  pic: {
    value: require('./photos/scene1.JPG'),
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  },
  des: {
    value: '初次相遇',
    animateIn: 'fadeInLeft',
    animateOut: 'fadeOutRight',
    pos: 'bottom'
  },
  pdt: [{
    value: require('./photos/scene1-pdt1.JPG'),
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutDown',
    pos: 'bottom-left'
  }]
}, {
  pic: {
    value: require('./photos/scene2.JPG'),
    animateIn: 'zoomIn',
    animateOut: 'zoomOut'
  },
  des: {
    value: '第一次游玩',
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  }
}, {
  pic: {
    value: require('./photos/scene3.JPG'),
    animateIn: 'rotateIn',
    animateOut: 'rotateOut'
  },
  des: {
    value: '第一次出省',
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    pos: 'bottom'
  }
}, {
  pic: {
    value: require('./photos/scene4.JPG'),
    animateIn: 'flipInX',
    animateOut: 'flipOutY'
  },
  des: {
    value: '希望以后的每一次重要时刻有你相伴',
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    pos: 'top'
  }
}]

export default data