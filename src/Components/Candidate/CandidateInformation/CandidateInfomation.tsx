import React from "react";
import { Breadcrumb } from "antd";
import { Collapse } from "antd";
import { Table, Divider, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./CandidateInformation.css";
import { Card } from "antd";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ProfileImage from "../CandidateImage/Image";
import "../CandidateImage/Image";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
interface DataType {
  key: string;
  title: string;
  score: number | string;
}

const columns1: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    render: (text: any) => <div>{text}</div>,
  },
  {
    title: "Score",
    dataIndex: "score",
  },
];

const columns2: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    render: (text: any) => <div>{text}</div>,
  },
  {
    title: "",
    dataIndex: "score",
  },
];

const { Panel } = Collapse;

const CandidateInfo: React.FC = () => {
  const candidate: any = useSelector((state) => state);
  const data1: DataType[] = [
    {
      key: "1",
      title: "SSC Score",
      score: candidate.display["SSC %"],
    },
    {
      key: "2",
      title: "HSC Score",
      score: candidate.display["HSC %"],
    },
    {
      key: "3",
      title: "Diploma Score",
      score: candidate.display["Diploma %"],
    },
    {
      key: "4",
      title: "Bachelor in Technology",
      score: candidate.display["UG %"],
    },
    {
      key: "5",
      title: "Post Graduate Score",
      score: candidate.display["PG %"],
    },
  ];

  const data2: DataType[] = [
    {
      key: "1",
      title: "Company Name",
      score: "MAQ Software",
    },
    {
      key: "2",
      title: "Designation",
      score: "Software Engineer",
    },
    {
      key: "3",
      title: "Years of Experience",
      score: 2,
    },
  ];
  return (
    <div style={{ display: "grid" }}>
      <Breadcrumb
        style={{ height: 50, paddingTop: 10 }}
        items={[
          {
            title: <Link to="/candidate">Candidate</Link>,
          },
          {
            title: (
              <Link to="/candidate/CandidateName">
                {candidate.display["Name"]}
              </Link>
            ),
          },
        ]}
      />

      <div className="image" style={{ display: "flex" }}>
        <ProfileImage />

        <div className="info" style={{ width: "20vw", minWidth: "500px" }}>
          <Card className="card">
            <p>Name : {candidate.display["Name"]}</p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineMail style={{ fontSize: 20, marginRight: 10 }} />
              {candidate.display["Email"]}
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <BsFillTelephoneFill style={{ marginRight: 10 }} />
              +91 1234567890
            </p>
            <div style={{ display: "flex" }}>
              <Button
                block
                className="cardButton"
                style={{
                  display: "flex",
                  marginRight: 10,
                  width: "12vw",
                  minWidth: "250px",
                }}
              >
                {" "}
                <AiFillLinkedin
                  style={{ fontSize: 20, marginRight: 10 }}
                />{" "}
                <a href="https://www.google.com/" target={"_blank"}>
                  https:/www.google.com
                </a>
              </Button>
              <Button block className="cardButton" style={{ display: "flex" }}>
                {" "}
                <AiFillBook style={{ fontSize: 20, marginRight: 10 }} />
                View Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Divider></Divider>

      <div className="educationInfo">
        <Collapse ghost style={{ width: "40vw" }}>
          <Panel
            header="Educational Details"
            key="1"
            style={{ marginBottom: 20, paddingTop: 0 }}
          >
            <Table
              columns={columns1}
              dataSource={data1}
              size="small"
              pagination={false}
            />
          </Panel>
        </Collapse>

        <Collapse ghost style={{ width: "40vw" }}>
          <Panel header="Employment Details" key="1">
            <Table
              columns={columns2}
              dataSource={data2}
              size="small"
              pagination={false}
            />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default CandidateInfo;
