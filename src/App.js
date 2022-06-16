// 组件状态 class component

import React from "react";

class TestComponent extends React.Component {
  // 1. 定义组件状态
  state = {
    name: "qiuqianaw",
  };
  // 3.修改状态
  changeName = () => {
    this.setState({
      name: "qiuqian",
    });
  };

  render() {
    // 2.使用状态
    return (
      <div>
        hello, {this.state.name}
        <button onClick={this.changeName}>change name</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

export default App;
