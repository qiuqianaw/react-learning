import { Button, Input, Popconfirm, Table } from "antd";
import React from "react";
// import axios from "axios";
import "./App.css";

const { Search } = Input;

class App extends React.Component {
  state = {
    list: [],
    colunms: [
      {
        title: "任务编号",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "任务名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "任务描述",
        dataIndex: "des",
        key: "des",
      },
      {
        title: "操作",
        dataIndex: "operate",
        key: "operate",
        render: (_, record) => {
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => this.deleteHandler(record)}
          >
            <Button>Delete</Button>
          </Popconfirm>;
        },
      },
    ],
  };
  // 搜索
  onSearch = (value) => {
    console.log(value);
  };
  // 删除
  deleteHandler = (record) => {};

  // 加载列表
  loadList = async () => {
    // const res = await axios.get("http://localhost:3001/data");
    const res = [
      {
        id: "1",
        name: "hello",
        des: "hello, world",
      },
      {
        id: "2",
        name: "Golang",
        des: "Golang yyds",
      },
      {
        id: "3",
        name: "TypeScript",
        des: "TypeScript yyds",
      },
    ];
    this.setState({
      list: res,
    });
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    return (
      <>
        <div className="container">
          <Search
            placeholder="please input content"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={this.onSearch}
          />
          <Table columns={this.state.colunms} dataSource={this.state.list} />
        </div>
      </>
    );
  }
}

export default App;
