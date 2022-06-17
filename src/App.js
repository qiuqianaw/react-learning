import React, { createRef } from "react";
// 非受控组件
// 通过手动操作dom的方式获取文本框值，文本框状态不再受state控制，通过原生dom获取输入框的值
class Input extends React.Component {
  msgRef = createRef();
  getValue = () => {
    console.log(this.msgRef.current.value);
  };
  render() {
    return (
      <>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    );
  }
}

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
