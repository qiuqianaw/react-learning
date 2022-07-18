import { Button } from "antd";
import { useState } from "react";

// 由传入控制初始值
function Counter(props) {
  const [count, setCount] = useState(() => {
    // 初始值经过计算return
    return props.count;
  });
  return <Button onClick={() => setCount(count + 1)}>{count}</Button>;
}

function App() {
  return (
    <>
      <div>
        <Counter count={10} />
        <Counter count={20} />
      </div>
    </>
  );
}

export default App;
