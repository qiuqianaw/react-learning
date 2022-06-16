import React from "react";

class TestComponent extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: "qiuqian",
      gender: 1,
      age: 18,
    },
  };

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      list: this.state.list.filter((item) => item !== 2),
      person: {
        ...this.state.person,
        name: "qiuqianaw",
      },
    });
  };

  render() {
    // 2.使用状态
    return (
      <>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>{this.state.person.name}</div>
        <div>
          {this.state.count}
          <button onClick={this.clickHandler}>changeState</button>
        </div>
      </>
    );
  }
}

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

export default App;
