import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";
import Article from "./Articlr";
import Board from "./Board";
import Layout from "./Layout";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 默认二级 添加index属性 把自己的path去掉 */}
          <Route index element={<Board />}></Route>
          <Route path="article" element={<Article />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
