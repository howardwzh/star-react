import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.addCounter = this.addCounter.bind(this)
  }

  addCounter () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const { title } = this.props
    const { counter } = this.state
    return (
      <div className="App">
        <h2>{title}</h2>
        <h5>{counter}</h5>
        <button onClick={this.addCounter}>add counter</button>
      </div>
    );
  }
}

export default App;
