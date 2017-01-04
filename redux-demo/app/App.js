import { connect } from 'react-redux';
import MyComponent from './myComponent';
import './utils';

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onClick: (commentObj) => dispatch({
      type: 'add',
      name: commentObj.name,
      text: commentObj.text,
      time: (new Date()).Format("yyyy-MM-dd hh:mm:ss")
    })
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;
