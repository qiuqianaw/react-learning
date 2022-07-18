import { useLocalStorage } from "./hooks/useLocalStorage";
// 1. message 通过自定义传入默认初始值
// 2. 每次修改message数据时，自动往本地同步
function App() {
  const [message, setMessage] = useLocalStorage("hook-key", "qiuqian");
  setTimeout(() => {
    setMessage("aw");
  }, 5000);
  return (
    <>
      <div>{message}</div>
    </>
  );
}

export default App;
