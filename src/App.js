import { Button } from "antd";
import { useState, useEffect } from "react";

// 1. 修改数据后，把count放在标题(副作用)
// 2. 在函数组件中执行，传入回调，定义副作用
// 3. 通过修改状态更新组件，副作用也会不断执行

function updateTitle(count) {
  document.title = count;
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    updateTitle(count);
  });
  return (
    <>
      <div>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </div>
    </>
  );
}

export default App;
