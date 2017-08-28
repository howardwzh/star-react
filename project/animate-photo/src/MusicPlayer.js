import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './MusicPlayer.css';

class MusicPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPlayed: false,
    }
  }
  render() {
    const btnClass = this.state.isPlayed ? 'player-off' : 'player-on'
    return (
      <div className="music-player">
        <ReactAudioPlayer
          src={require('./loveu.mp3')}
          autoPlay
          controls
          loop
          className="audio"
          onPlay={()=>this.setState({isPlayed:true})}
          onPause ={()=>this.setState({isPlayed:false})}
        />
        <span className={btnClass}></span>
      </div>
    );
  }
}

export default MusicPlayer;
