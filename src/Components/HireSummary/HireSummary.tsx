import React, { useState } from "react";
import FilterPane from "../FilterPane/FilterPane";
import { Table } from "antd";
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

  const columns: ColumnsType<hDataType> = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      filteredValue: [searchedText],
      sorter: (a, b) => a.Name.length - b.Name.length,
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
      title: "Panel/Feedback",
      dataIndex: "panelFeedback",
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
      </div>
    </>
  );
};

export default HireSummary;
