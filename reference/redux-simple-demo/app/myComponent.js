import React from 'react';
import ReactDOM from 'react-dom';

import MyTitle from './myTitle';
import MyTip from './myTip';
import MyComment from './myComment';
import MyMessage from './myMessage';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <MyTitle/>
        <MyTip/>
        <div className="row">
          <div className="col-md-4"><MyComment clickHandle={this.props.onClick}/></div>
          <div className="col-md-8"><MyMessage data={this.props.comments}/></div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
