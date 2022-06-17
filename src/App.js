import React from "react";

// 函数式 son component
// function SonFunction(props) {
//   // props对象存的是通过父组件传入的所有数据
//   // 解构赋值
//   const { list, userInfo, getMsg, child, msg } = props;
//   return (
//     <>
//       <div>函数子组件, {msg}</div>
//       <div>
//         <ul>
//           {list.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       </div>
//       <div>{userInfo.name}</div>
//       <div>
//         <button onClick={getMsg}>触发父组件传入的函数</button>
//       </div>
//       <div>{child}</div>
//     </>
//   );
// }
function SonFunction({ list, userInfo, getMsg, child, msg }) {
  // 传参时解构赋值
  // props对象存的是通过父组件传入的所有数据
  return (
    <>
      <div>函数子组件, {msg}</div>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>{userInfo.name}</div>
      <div>
        <button onClick={getMsg}>触发父组件传入的函数</button>
      </div>
      <div>{child}</div>
    </>
  );
}

// 类式 son component
class SonClass extends React.Component {
  render() {
    return <div>类子组件, {this.props.msg}</div>;
  }
}

// parent component
class App extends React.Component {
  state = {
    message: "this is a msg",
    list: [1, 2, 3, 4, 5],
    userInfo: {
      name: "qiuqian",
      gender: 1,
      age: 18,
    },
  };
  getMsg = () => {
    console.log("function from parent component!");
  };
  render() {
    return (
      <>
        <div>
          <SonFunction
            msg={this.state.message}
            list={this.state.list}
            userInfo={this.state.userInfo}
            getMsg={this.getMsg}
            child={<span>this is a span</span>}
          />
          <SonClass msg={this.state.message} />
        </div>
      </>
    );
  }
}

export default App;
