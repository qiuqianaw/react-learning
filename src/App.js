import { Button } from "antd";
import { useState, useContext, createContext } from "react";

const Context = createContext();
function ComA() {
  const count = useContext(Context);
  return (
    <>
      <div>
        thid id ComA
        <br /> app传来的数据: {count}
      </div>
      <ComC />
    </>
  );
}

function ComC() {
  const count = useContext(Context);
  return (
    <div>
      thid id ComC
      <br />
      comA传来的数据: {count}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(15);
  return (
    <>
      <Context.Provider value={count}>
        <div>
          <ComA />
          <Button onClick={() => setCount(count + 1)}>click me</Button>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
