import React from "react";
import { Button } from "antd";
import "./App.css"

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Button type="primary">测试button</Button>
      </div>
    )
  }
}

export default App;
