import React from "react";

// 子传父: 子组件调用父组件传递过来的函数，把想要传递的数据作为实参
function Son(props) {
  const { getSonMsg } = props;
  const message = "son component msg";
  function clickHandler() {
    getSonMsg(message);
  }
  return (
    <>
      <div>
        this is son
        <button onClick={clickHandler}>button</button>
      </div>
    </>
  );
}

// parent component
class App extends React.Component {
  state = {
    list: [1, 2, 3],
  };

  // 准备一个函数接收子组件的数据
  getSonMsg = (sonMsg) => {
    console.log("msg from son component: ", sonMsg);
  };
  render() {
    return (
      <>
        <div>
          <Son getSonMsg={this.getSonMsg} />
        </div>
      </>
    );
  }
}

export default App;
