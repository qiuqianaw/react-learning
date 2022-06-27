import React from "react";

// 生命周期 类组件需要被实例化，才有生命周期
// constructor => render(渲染ui) => componentDidMount(操作DOM，副作用)
class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    count: 0,
  };
  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");

    return (
      <div>
        this is div
        <button onClick={this.clickHandler}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;
