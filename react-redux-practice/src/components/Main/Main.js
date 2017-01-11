import React from 'react';
import { Link, IndexLink } from 'react-router';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Router-Todo</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/todo" activeClassName="active">Todo</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Main