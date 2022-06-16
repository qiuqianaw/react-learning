import React from "react";
import "./App.css";

// 函数组件
function HelloFunctionComponent() {
  const clickHandler = (e) => {
    // 阻止默认行为
    e.preventDefault();
    console.log("函数组件中的事件被触发", e);
  };
  return (
    <div>
      <a onClick={clickHandler} href="https://qiuqian.xyz">
        https://qiuqian.xyz
      </a>
    </div>
  );
}

// 类组件
// 回调函数this指向当前组件实例对象
class HelloClassComponent extends React.Component {
  clickHandler = () => {
    console.log("类组件中的事件被触发");
  };
  render() {
    return <div onClick={this.clickHandler}>this is a class Component</div>;
  }
}

function App() {
  return (
    <>
      <div className="App">
        <HelloFunctionComponent />
        <HelloClassComponent />
      </div>
    </>
  );
}

export default App;
