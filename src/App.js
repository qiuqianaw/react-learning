import React from "react";
// 兄弟组件通信: 通过状态提升机制，利用共同的父组件实现兄弟通信, B component -> A component

function SonA(props) {
  return <div>this is A, {props.message}</div>;
}

function SonB(props) {
  const bMsg = "data in B";
  return (
    <div>
      this is B<button onClick={() => props.getBMsg(bMsg)}>发送数据</button>
    </div>
  );
}

class App extends React.Component {
  state = {
    message: ""
  };
  getBMsg = (msg) => {
    console.log(msg);
    this.setState({
      message: msg
    })
  };
  render() {
    return (
      <>
        <SonA message={this.state.message} />
        <SonB getBMsg={this.getBMsg} />
      </>
    );
  }
}

export default App;
