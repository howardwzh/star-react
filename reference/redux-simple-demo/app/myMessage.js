import React from 'react';
import ReactDOM from 'react-dom';

class MyMessage extends React.Component {
  render() {
    let commentNodes = this.props.data.map(function(comment, key) {
      return (
        <div key={key}>
          <h6>{comment.name}({comment.time})</h6>
          <p>{comment.text}</p>
        </div>
      );
    });
    return (
      <div className="board-comment">
        <h5>Placeholder message</h5>
        <div className="message-group" >
          {commentNodes}
        </div>
      </div>
    );
  }
};

export default MyMessage;
