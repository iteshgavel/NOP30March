import React, { useState } from "react";
import FilterPane from "../FilterPane/FilterPane";
import { Table, Rate, Space, Avatar } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { PlusSquareFilled } from "@ant-design/icons";
import "./HireSummary.css";
import MoreEllipses from "../MoreEllipses/MoreEllipses";

interface DataType {
  key: React.Key;
  Name: string;
  candidateName: any;
  positon: string;
  offered: string;
  offerType: string;
  panelFeedback: any;
  finalFeedback: any;
}



const data: DataType[] = [
  {
    key: "1",
    Name: "Rahul Singh",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} /> Rahul Singh
      </Space>
    ),
    positon: "UX Designer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "2",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "UX Designer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "3",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Developer",
    offered: "Yes",
    offerType: "Part Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "4",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Developer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={4}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "5",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Developer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={2}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "6",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Developer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={5}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "7",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Developer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={4}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "8",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Manager",
    offered: "Yes",
    offerType: "Part Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "9",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Manager",
    offered: "Yes",
    offerType: "Part Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "10",
    Name: "Awdhesh Gupta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Awdhesh Gupta
      </Space>
    ),
    positon: "Manager",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "11",
    Name: "Rahul Mehta",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Rahul Mehta
      </Space>
    ),
    positon: "Engineer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
  {
    key: "12",
    Name: "Rahul Sinha",
    candidateName: (
      <Space>
        <Avatar src={"https://picsum.photos/200"} />
        Rahul Sinha
      </Space>
    ),
    positon: "Engineer",
    offered: "Yes",
    offerType: "Full Time",
    panelFeedback: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    finalFeedback: (
      <div className="finalFeedback">
        <div className="rate">
          <Rate
            character={<PlusSquareFilled />}
            style={{ color: "#FF9736" }}
            defaultValue={3}
          />
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
  },
];

const onChange: TableProps<DataType>["onChange"] = (
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

  const columns: ColumnsType<DataType> = [
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
        <div className="totalCandidate">{`${data.length} Candidates`}</div>
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
            dataSource={data}
            onChange={onChange}
            bordered
          />
        </div>
      </div>
    </>
  );
};

export default HireSummary;
