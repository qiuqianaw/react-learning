// 首次渲染
// 首次被渲染的时候，组件内部的代码会被执行一次
// 其中useState也会执行，初始值只在首次渲染时生效

// 更新渲染 setCount都会更新
// 1. app组件会再次渲染，这个函数会再次执行
// 2. useState再次执行，得到新的count值不是0，而是修改之后的1，模版会用新值渲染

import { Button } from "antd";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </>
  );
}

export default App;
