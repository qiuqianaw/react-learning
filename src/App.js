import React, { createContext } from "react";
// Context 无需通过中间层，上层组件可以直接传递数据给下层组件(相对上下，但通常都通过App作为数据的提供方)
const { Provider, Consumer } = createContext();

// App -> A -> C
// App -> C

function ComponentA() {
  return (
    <div>
      this is ComponentA
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  return (
    <div>
      this is ComponentC, 
      {/*  通过Consumer使用 */}
      <Consumer>{(value) => <span>{value}</span>}</Consumer>
    </div>
  );
}

class App extends React.Component {
  state = {
    message: "this is message",
  };

  render() {
    return (
      // 使用Provider包裹根组件
      <Provider value={this.state.message}>
        <div>
          <ComponentA />
        </div>
      </Provider>
    );
  }
}

export default App;
