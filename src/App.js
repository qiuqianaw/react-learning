import React from "react";
import "./App.css";

// 函数组件
function HelloFunctionComponent() {
  const clickHandler = (e, msg) => {
    // 阻止默认行为
    e.preventDefault();
    console.log(e);
    console.log(msg);
  };
  return (
    <div>
      <div onClick={(e) => clickHandler(e, "there is a message")}>click me</div>
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
