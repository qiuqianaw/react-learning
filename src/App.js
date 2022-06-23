import React from "react";
import PropTypes from "prop-types";

function Test({ list }) {
  return (
    <>
      <div>
        {list.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
}
Test.propTypes = {
  // 定义校验规则
  list: PropTypes.array.isRequired,
};

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Test list={[1, 2, 3, 4, 5]} />
      </div>
    );
  }
}

export default App;
