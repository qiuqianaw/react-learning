import { Button } from "antd";
import { useState, useEffect } from "react";

// 1. 修改数据后，把count放在标题(副作用)
// 2. 在函数组件中执行，传入回调，定义副作用
// 3. 通过修改状态更新组件，副作用也会不断执行

// 依赖项控制副作用的执行时机
// 1. 默认状(无依赖项)
// 组件初始化的时候先执行一次，待每次数据修改组件更新再次执行
// 2. 添加一个空数组依赖项
// 组件初始化时执行一次
// 3. 添加特定依赖项
// 副作用函数在首次执行时渲染，在依赖项发生变化时重新执行
// 4. ps: useEffect回调函数中用到的数据就是依赖数据，应该出现在依赖数据中，如果不添加到依赖数据，可能出现错误

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("qiuqian");
  useEffect(() => {
    console.log("副作用执行");
    console.log(name);
    document.title = count;
  }, [count, name]);
  return (
    <>
      <div>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
        <Button onClick={() => setName("aw")}>{name}</Button>
      </div>
    </>
  );
}

export default App;
