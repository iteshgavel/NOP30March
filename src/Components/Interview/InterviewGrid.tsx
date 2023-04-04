import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { rdata, rDataType } from "./DummyInterviewData";
import FilterPaneBar from "../FilterPane/FilterPane";
import "./InterviewGrid.css";

import type { ColumnsType } from "antd/es/table";

function InterviewGrid(props: any) {
  const [content, setContent] = React.useState(rdata);
  const columns: ColumnsType<rDataType> = [
    {
      title: "Name",
      dataIndex: "Name",
      //width: 300,
      key: "Name",
    },

    {
      title: "Position",
      dataIndex: "Position",
      key: "Position",
      //width: 370,
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
      //width: 270,
    },
    {
      title: "Time",
      dataIndex: "Time",
      key: "Time",
      //width: 220,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "Status",
      //width: 270,
    },
    {
      title: "Start",
      dataIndex: "Start",
      key: "Start%",
      //width: 240,
      render: (text: any) => <Link to="/Interview/Info">{text}</Link>,
    },
  ];

  const [filter, setFilter] = React.useState(true);

  const filterPane = filter ? (
    <>
      <FilterPaneBar setContent={setContent} />
    </>
  ) : (
    <></>
  );

  return (
    <>
      <div className="Interview-header">
          Candidates
      </div>
      <div>{filterPane}</div>

      <div className="interview-table">
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={content}
          bordered={true}
        />
      </div>
    </>
  );
}

export default InterviewGrid;
