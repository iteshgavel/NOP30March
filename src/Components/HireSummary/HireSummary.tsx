import React, { useState } from "react";
import FilterPane from "../FilterPane/FilterPane";
import { Table, Rate, Space, Avatar } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { PlusSquareFilled } from "@ant-design/icons";
import "./HireSummary.css";

interface DataType {
  key: React.Key;
  candidateName: any;
  positon: string;
  offered: string;
  offerType: string;
  panelFeedback: any;
  finalFeedback: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Candidate Name",
    dataIndex: "candidateName",
    sorter: (a, b) => a.candidateName.length - b.candidateName.length,
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

const data: DataType[] = [
  {
    key: "1",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "2",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "3",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "4",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "5",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "6",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "7",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "8",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "9",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "10",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "11",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
    ),
  },
  {
    key: "12",
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
      <Rate character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
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

  return (
    <>
      <div className="totalCandidate">{`${data.length} Candidates`}</div>
      <div>
        <FilterPane setContent={setContent} />
      </div>
      <div className="hireSummaryTable">
        <Table
          pagination={{ pageSize: 12 }}
          columns={columns}
          dataSource={data}
          onChange={onChange}
          bordered
        />
      </div>
    </>
  );
};

export default HireSummary;
