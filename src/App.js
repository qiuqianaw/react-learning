import React from "react";

// 函数式 son component
function SonFunction(props) {
  // props对象存的是通过父组件传入的所有数据
  return <div>函数子组件, {props.msg}</div>;
}

// 类式 son component
class SonClass extends React.Component {
  render() {
    return <div>类子组件, {this.props.msg}</div>;
  }
}

// parent component
class App extends React.Component {
  state = {
    message: "this is a msg",
  };
  render() {
    return (
      <>
        <div>
          <SonFunction msg={this.state.message} />
          <SonClass msg={this.state.message} />
        </div>
      </>
    );
  }
}

export default App;
