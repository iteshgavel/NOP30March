import React from "react";
import { Link } from "react-router-dom";
import { Rate, Space, Avatar } from "antd";
import { PlusSquareFilled } from "@ant-design/icons";
import MoreEllipses from "../MoreEllipses/MoreEllipses";

export interface hDataType {
  key: React.Key;
  Name: string;
  candidateName: any;
  positon: string;
  offered: string;
  offerType: string;
  panel: any;
  feedback: any;
  finalFeedback: any;
}

export const hData: hDataType[] = [
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
    panel: "",
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
    panel: (
      <a onClick={() => window.open("https://www.google.com/")}>
        <u>View</u>
      </a>
    ),
    feedback: (
      <a>
        <Link to="/Interview/Info">
          <u>View</u>
        </Link>

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
