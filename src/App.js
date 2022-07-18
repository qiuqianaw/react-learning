import { Button } from "antd";
import { useEffect, useState } from "react";

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("定时器执行了");
    }, 1000);
    return () => {
      // 清理
      clearInterval(timer);
    };
  }, []);
  return <div>This is Test</div>;
}
function App() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div>
        {flag ? <Test /> : null}
        <Button onClick={() => setFlag(!flag)}>switch</Button>
      </div>
    </>
  );
}

export default App;
