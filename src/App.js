import Home from "./Home";
import About from "./About";
import Login from "./Login";

// 路由配置
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    // 声明当前需要非hash模式路由
    <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* 路由出口 路由对应组件在这里渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
