import React, { Component } from 'react';
import _ from 'lodash';
import cs from 'classnames';
import './AnimatePhoto.css';

const OFFSET_INDEX = 0

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
    if (self.state.totle > 1) {
      setInterval(() => {
        self.setState({
          prevIndex: self.state.currentIndex,
          currentIndex: ((self.state.currentIndex + 1) % self.state.totle)
        })
      }, 5000)
    }
  }

  render() {
    const prevIndex = this.state.prevIndex + OFFSET_INDEX
    const currentIndex = this.state.currentIndex + OFFSET_INDEX
    const picElements = _.map(this.props.data, (v, i) => {
      /** 如果不是上一个场景，也不是当前的场景，则返回节点内容为null */
      if (i !== prevIndex && i !== currentIndex) {
        return null
      }
      /** 以下为正常组织节点内容 */
      // 照片
      const picAnimateOut = v.pic.animateOut || 'fadeOut'
      const picAnimateIn = v.pic.animateIn || 'fadeIn'
      const picAnimateClass = cs({
        [picAnimateOut]: (i === prevIndex),
        [picAnimateIn]: (i === currentIndex)
      })
      // 描述
      const desAnimateOut = v.des.animateOut || 'fadeOut'
      const desAnimateIn = v.des.animateIn || 'fadeIn'
      const desAnimateClass = cs({
        [desAnimateOut]: (i === prevIndex),
        [desAnimateIn]: (i === currentIndex)
      })
      const desStyle = v.des.style ? v.des.style : { bottom: '5%' }
      // 挂件
      const pdtElements = _.map(v.pdt, (p, j) => {
        const pdtAnimateOut = p.animateOut || 'fadeOut'
        const pdtAnimateIn = p.animateIn || 'fadeIn'
        const pdtAnimateClass = cs({
          [pdtAnimateOut]: (i === prevIndex),
          [pdtAnimateIn]: (i === currentIndex)
        })
        const pdtStyle = p.style ? p.style : {
          top: '10%',
          left: '10%',
          width: '20%'
        }
        return <img key={j} src={p.value} style={ pdtStyle } className={ pdtAnimateClass + ' animated' } alt="" />
      })
      // 返回节点内容
      return (
        <div key={i} className="scene">
          <div className={picAnimateClass + ' board animated'} style={{ backgroundImage: 'url(' + v.pic.value + ')' }}></div>
          <h5 className={desAnimateClass + ' animated'} style={ desStyle } dangerouslySetInnerHTML={{__html: v.des.value}}></h5>
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
