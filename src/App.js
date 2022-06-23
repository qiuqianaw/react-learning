import React from "react";

class Test extends React.Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <>
      <div>this is pageSize: {this.props.pageSize}</div>
      </>
    )
  }
}
// Test.defaultProps = {
//   pageSize: 10
// }


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
