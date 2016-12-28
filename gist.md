## Container 与 Presentational Components

> 以下先参考 Redux 官网 列出两者相异之处：
> 
> Presentational Components
> 
> - 用途：怎么看事情（Markup、外观）
> - 是否让 Redux 意识到：否
> - 取得资料方式：从 props 取得
> - 改变资料方式：从 props 去呼叫 callback function
> - 写入方式：手动处理 
>
> Container Components 
> - 用途：怎么做事情（撷取资料，更新 State）
> - 是否让 Redux 意识到：是
> - 取得资料方式：订阅 Redux State（store）
> - 改变资料方式：Dispatch Redux Action
> - 写入方式：从 React Redux 产生
> 
> 从上面的分析读者可以发现，两者最大的差别在于 Component 主要负责单纯的 UI 
> 的渲染，而 Container 则负责和 Redux 的 store 沟通，作为 Redux 和 Component 之
> 的桥梁。这样的分法可以让程式架构和职责更清楚，所以接下来我们就使用上一章节的 
> Redux TodoApp 进行改造，改造成 Container 与 Presentational Components 模式。

### Container Components - TodoHeaderContainer.js
```javascript
import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

// 将欲使用的 actions 引入
import {
  changeText,
  createTodo,
} from '../../actions';

const mapStateToProps = (state) => ({
  // 从 store 取得 todo state
  todo: state.getIn(['todo', 'todo'])
});

const mapDispatchToProps = (dispatch) => ({
  // 当使用者在 input 输入资料值即会触发这个函数，发出 changeText action 并附上使用者输入内容 event.target.value
  onChangeText: (event) => (
    dispatch(changeText({ text: event.target.value }))
  ),
  // 当使用者按下送出时，发出 createTodo action 并清空 input 
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoHeader);
```

### Presentational Components - TodoHeader.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 开始建设 Component 并使用 connect 进来的 props 并绑定事件（onChange、onClick）。注意我们的 state 因为是使用 `ImmutableJS` 所以要用 `get()` 取值

const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo,
}) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" value={todo.get('text')} onChange={onChangeText} />
    <button onClick={onCreateTodo}>送出</button>
  </div>
);

export default TodoHeader;
```