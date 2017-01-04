import React from 'react';
import ReactDOM from 'react-dom';

class MyComment extends React.Component {
  constructor(props) {
      super(props)
      this.nameDom = null
      this.textDom = null
  }

  submitComment() {
    const name = this.nameDom.value
    const text = this.textDom.value

    if(!name){
      alert('请输入名字！')
    } else if(!text){
      alert('请输入评论内容！')
    } else {
      this.nameDom.value = ''
      this.textDom.value = ''
      this.props.clickHandle({
        name: name,
        text: text
      })
    }
  }

  componentDidMount() {
    this.nameDom = document.getElementById('exampleInputName')
    this.textDom = document.getElementById('exampleInputContent')
  }

  render() {
    return (
      <div className="board-comment">
        <h5>Leave a Message</h5>
        <div className="form-group">
          <label htmlFor="exampleInputName">your name</label>
          <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputContent">your comment</label>
          <textarea className="form-control" id="exampleInputContent" placeholder="Enter content"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.submitComment.bind(this)}>Submit</button>
      </div>
    );
  }
};

export default MyComment;
