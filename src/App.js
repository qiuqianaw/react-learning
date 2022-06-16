import React from "react";
import "./App.css";

// 函数组件
function HelloFunctionComponent() {
  const clickHandler = () => {
    console.log("函数组件中的事件被触发");
  };
  return <h1 onClick={clickHandler}>hello</h1>;
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
