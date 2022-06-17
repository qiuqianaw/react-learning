import React from "react";
// 受控组件
class InputComponent extends React.Component {
  // 1. 声明控制input value的react组件自己的状态
  state = {
    message: "this is msg",
  };
  inputChange = (e) => {
    console.log("change event active", e);
    this.setState({
      message: e.target.value,
    });
  };
  render() {
    return (
      // 2. 绑定value
      // 3. 绑定数据
      <>
        <input
          type="text"
          value={this.state.message}
          onChange={this.inputChange}
        />
      </>
    );
  }
}

function App() {
  return (
    <div>
      <InputComponent />
    </div>
  );
}

export default App;
