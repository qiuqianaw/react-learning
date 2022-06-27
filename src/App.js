import React from "react";

class Test extends React.Component {
  // 如果数据是组件的状态，会影响视图，定义到state
  // 如果数据不和视图绑定，定义普通实例属性
  timer = null;
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("定时器开启");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    // 清理定时器
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <div>test</div>
      </>
    );
  }
}

// 生命周期 类组件需要被实例化，才有生命周期
// constructor => render(渲染ui 每次渲染都会触发) => componentDidMount(操作DOM，副作用)
class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    count: 0,
    flag: true,
  };
  clickHandler = () => {
    this.setState({ count: this.state.count + 1, flag: !this.state.flag });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    // 组件更新后(DOM渲染完毕)， 不要在里面调用setState
    console.log("componentDidUpdate");
  }

  render() {
    // 不要在里面调用setState
    console.log("render");
    return (
      <div>
        this is div
        {/* 通过数据状态切换，让Test组件创建和销毁 */}
        {(this, this.state.flag ? <Test /> : null)}
        <button onClick={this.clickHandler}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;
