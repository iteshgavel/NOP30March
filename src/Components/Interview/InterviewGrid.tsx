import React from "react";
import { Table } from "antd";
import { idata, iDataType } from "./DummyInterviewData";
import FilterPane from "../FilterPane/FilterPane";
import type { ColumnsType } from "antd/es/table";
import "./Interview.css";

interface InterviewGridPropType {
  content: iDataType[];
  setContent: React.Dispatch<React.SetStateAction<iDataType[]>>;
  showingInterviewInfo: iDataType;
  setShowingInterviewInfo: React.Dispatch<React.SetStateAction<iDataType>>;
}
function InterviewGrid(props: InterviewGridPropType) {
  const [content, setContent] = React.useState(idata);
  const [searchedText, setSearchedText] = React.useState("");
  const columns: ColumnsType<iDataType> = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 300,
      key: "Name",
      filteredValue: [searchedText],
      onFilter: (value: any, record: iDataType) => {
        return String(record.Name).toLowerCase().includes(value.toLowerCase());
      },
      ellipsis: true,
      sorter: (a, b) => a.Name.localeCompare(b.Name),
    },

    {
      title: "Position",
      dataIndex: "Position",
      key: "Position",
      width: 370,
      sorter: (a, b) => a.Position.localeCompare(b.Position),
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
      width: 270,
      sorter: (a, b) => {
        return a["Date"] - b["Date"];
      },
    },
    {
      title: "Time",
      dataIndex: "Time",
      key: "Time",
      width: 220,
      sorter: (a, b) => {
        return a["Time"] - b["Time"];
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      width: 270,
    },
    {
      title: "Start",
      dataIndex: "Start",
      key: "Start%",
      width: 240,
      onCell: (record: any) => {
        return {
          onClick: () => {
            props.setShowingInterviewInfo(record);
            console.log(record);
          },
        };
      },
    },
  ];

  return (
    <>
      <div className="interviewMain">
      <div className="totalCandidate">{`${idata.length} Candidates`}</div>
        <div className="interviewFilterPane">
          {" "}
          <FilterPane
            setSearchedText={setSearchedText}
            setContent={setContent}
          />
        </div>

        <div className="interview-table">
          <Table
            scroll={{ x: true }}
            columns={columns}
            dataSource={idata}
            bordered={true}
          />
        </div>
      </div>
    </>
  );
}

export default InterviewGrid;
