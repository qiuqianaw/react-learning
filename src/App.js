// 组件实例 类组件
// DOM对象 标签

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

class TestC extends React.Component {
  state = {
    name: "test name",
  };
  getName = () => {
    return "This is chile TestC";
  };
  render() {
    return <div>I'm class Component</div>;
  }
}

function App() {
  const testRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    console.log(testRef.current);
    console.log(h1Ref.current);
  }, []);
  // useEffect回调在DOM渲染之后执行
  // 和Vue里的watch效果类似，执行时机不同
  return (
    <>
      <div>
        <TestC ref={testRef} />
        <h1 ref={h1Ref}>This is h1</h1>
      </div>
    </>
  );
}

export default App;
