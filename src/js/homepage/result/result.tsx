import * as React from "react";

import { Table, Divider, Tag } from "antd";
import { HomePageContext } from "../store/store";
import "./result.scss";

const { useContext } = React;

const columns = [
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
    render: text => <a>{text}</a>
  },
  {
    title: "Card Type",
    dataIndex: "cardType",
    key: "cardType"
  }
];

const Result: React.FC = () => {
  const [state, updateState] = useContext(HomePageContext);
  return (
    <section className="table">
      <Table columns={columns} dataSource={state.data} />
    </section>
  );
};

export { Result };
