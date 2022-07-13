// useState
// 1. 倒入 useState
// 2. 传入初始值
// 3. [数据, 修改数据的方法]
// 4. 使用，修改数据

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
