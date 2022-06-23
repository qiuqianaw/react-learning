import React from "react";
// 函数组件默认值

function Test({ pageSize = 10 }) {
  return (
    <>
      <div>this is pageSize: {pageSize}</div>
    </>
  );
}
// Test.defaultProps = {
//   pageSize: 10,
// };

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Test pageSize={20} />
      </div>
    );
  }
}

export default App;
