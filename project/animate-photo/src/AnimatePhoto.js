import React, { Component } from 'react';
import _ from 'lodash';
import cs from 'classnames';
import './AnimatePhoto.css';

class AnimatePhoto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      prevIndex: -1,
      currentIndex: 0,
      totle: this.props.data.length
    }
  }

  componentDidMount () {
    const self = this
    setInterval(() => {
      self.setState({
        prevIndex: self.state.currentIndex,
        currentIndex: ((self.state.currentIndex + 1) % self.state.totle)
      })
    }, 5000)
  }

  render() {
    
    const picElements = _.map(this.props.data, (v, i) => {
      // 照片
      const picAnimateOut = v.pic.animateOut || 'fadeOut'
      const picAnimateIn = v.pic.animateIn || 'fadeIn'
      // 描述
      const desAnimateOut = v.des.animateOut || 'fadeOut'
      const desAnimateIn = v.des.animateIn || 'fadeIn'
      const desPos = v.des.pos || 'top'
      // 点缀
      const hideClass = cs({
        'hide': (i !== this.state.prevIndex && i !== this.state.currentIndex)
      })
      const picAnimateClass = cs({
        [picAnimateOut]: (i === this.state.prevIndex),
        [picAnimateIn]: (i === this.state.currentIndex)
      })
      const desAnimateClass = cs({
        [desAnimateOut]: (i === this.state.prevIndex),
        [desAnimateIn]: (i === this.state.currentIndex)
      })
      const pdtElements = _.map(v.pdt, (p, j) => {
        // 描述
        const pdtAnimateOut = p.animateOut || 'fadeOut'
        const pdtAnimateIn = p.animateIn || 'fadeIn'
        const pdtPos = p.pos || 'top'
        const widthStyle = {
          width: p.width || '10%'
        }
        const pdtAnimateClass = cs({
          [pdtAnimateOut]: (i === this.state.prevIndex),
          [pdtAnimateIn]: (i === this.state.currentIndex)
        })
        return <img key={j} src={p.value} style={ widthStyle } className={ pdtAnimateClass + ' animated ' + pdtPos } alt="" />
      })
      return (
        <div key={i} className={hideClass + ' scene'}>
          <div className={picAnimateClass + ' board animated'} style={{ backgroundImage: 'url(' + v.pic.value + ')' }}></div>
          <h5 className={desAnimateClass + ' animated ' + desPos}>{v.des.value}</h5>
          { pdtElements }
        </div>
      )
    })
    return (
      <div className="animate-photo">
        { picElements }
      </div>
    );
  }
}

export default AnimatePhoto;
