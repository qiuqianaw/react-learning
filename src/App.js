// 类组件 发送网络请求
// 生命周期 狗子函数 componentDidMount
// 执行时机： 在初始化时DOM渲染完毕后执行一次

import { useEffect } from "react";

// useEffect
// 1. 不加依赖项： 初始化，重新渲染
// 2. []： 只会在初始化执行一次
// 3. 特定依赖项[count, name]： 首次执行，任意一个数值变化执行

function App() {
  useEffect(() => {
    function loadDate() {
      fetch("http://geek.itheima.net/v1_0/channels")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    loadDate();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
