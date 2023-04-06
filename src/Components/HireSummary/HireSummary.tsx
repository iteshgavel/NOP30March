import React, { useState } from "react";
import FilterPane from "../FilterPane/FilterPane";
import {Link} from 'react-router-dom'
import { Table, Modal } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { hData, hDataType } from "./DummyHireSummaryData";
import "./HireSummary.css";

const onChange: TableProps<hDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const HireSummary = () => {
  const [content, setContent] = useState();
  const [searchedText, setSearchedText] = React.useState("");
  const [modal2Open, setModal2Open] = useState(false);

  const panelCol = [
    {
      title: 'Rounds',
      dataIndex: 'rounds',
      key: 'rounds',
      width: 150
    },
    {
      title: 'Panels',
      dataIndex: 'panels',
      key: 'panels',
    },
  ];

  const dataSource = [
    {
      key: '1',
      rounds: 'Round1',
      panels: " ",
      
    },
    {
      key: '2',
      rounds: 'Round2',
      panels: "",
      
    },
    {
      key: '3',
      rounds: 'Round3',
      panels: "",  
    },
  ]
  

  const columns: ColumnsType<hDataType> = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      filteredValue: [searchedText],
      sorter: (a, b) => a.Name.length - b.Name.length,
      render: (text: any) => <Link className="LinkOfName" to="/Interview/Info">{text}</Link>,
      onFilter: (value: any, record: any) => {
        return String(record.Name).toLowerCase().includes(value.toLowerCase());
      },
    },

    {
      title: "Position",
      dataIndex: "positon",
      sorter: (a, b) => a.positon.length - b.positon.length,
    },
    {
      title: "Offered",
      dataIndex: "offered",
      sorter: (a, b) => a.offered.length - b.offered.length,
    },
    {
      title: "Offer Type",
      dataIndex: "offerType",
      sorter: (a, b) => a.offerType.length - b.offerType.length,
    },
    {
      title: "Panel",
      dataIndex: "panel",
      render: (text, record) => (
        <a onClick={() => setModal2Open(true)}><u>View</u></a>
      ),
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
    },
    {
      title: "Final Feedback",
      dataIndex: "finalFeedback",
    },
  ];

  return (
    <>
      <div className="hireSummaryBody">
        <div className="totalCandidate">{`${hData.length} Candidates`}</div>
        <div className="HireSymmaryfilterPane">
          <FilterPane
            setSearchedText={setSearchedText}
            setContent={setContent}
          />
        </div>
        <div className="hireSummaryTable">
          <Table
            pagination={{ pageSize: 9 }}
            columns={columns}
            dataSource={hData}
            onChange={onChange}
            bordered
          />
        </div>
        <Modal
        footer={null}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        style={{padding : 0}}
      >
        <Table dataSource={dataSource} columns={panelCol} pagination={false}   bordered={true}/>
      </Modal>
      </div>
    </>
  );
};

export default HireSummary;
