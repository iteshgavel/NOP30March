import React from "react";
import Round1 from "./Round1";
import { Button } from "antd";
import { iDataType } from "./DummyInterviewData";
import {
  MessageOutlined,
  MailOutlined,
  LinkedinOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "../Interview/InterviewInformation.css";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Round 1`,
    children: <Round1 />,
    className: "tabs",
  },
  {
    key: "2",
    label: `Round 2`,
    children: `Content of Tab Pane 2`,
    className: "tabs",
  },
  {
    key: "3",
    label: `Round 3`,
    children: `Content of Tab Pane 3`,
    className: "tabs",
  },
];
interface InterviewGridPropType {
  content: iDataType[];

  setContent: React.Dispatch<React.SetStateAction<iDataType[]>>;

  showingInterviewInfo: iDataType;

  setShowingInterviewInfo: React.Dispatch<React.SetStateAction<iDataType>>;
}
function InterviewInfo(props: InterviewGridPropType) {
  function setNextRecord() {
    var record = 0;
    for (record = 0; record < props.content.length; record++) {
      if (props.content[record].key === props.showingInterviewInfo.key) {
        break;
      }
    }
    if (record === props.content.length - 1) {
      props.setShowingInterviewInfo(props.content[0]);
    } else {
      props.setShowingInterviewInfo(props.content[record + 1]);
    }
  }
  function setPrevRecord() {
    var record = 0;
    for (record = 0; record < props.content.length; record++) {
      if (props.content[record].key === props.showingInterviewInfo.key) {
        break;
      }
    }
    if (record === 0) {
      props.setShowingInterviewInfo(props.content[props.content.length - 1]);
    } else {
      props.setShowingInterviewInfo(props.content[record - 1]);
    }
  }
  return (
    <>
      <div className="interviewInformation">
        <div className="profileImg">
          <img className="image" alt="CandidateImage" src="https://picsum.photos/200"></img>
        </div>

        <div className="personalInformation">
          <div className="name">{props.showingInterviewInfo.Name} </div>

          <div className="email">test123@gmail.com</div>

          <div className="designation">
            For {props.showingInterviewInfo.Position}
          </div>

          <div className="time">
            Date and Time of Interview {props.showingInterviewInfo.Date} @{" "}
            {props.showingInterviewInfo.Time}PM
          </div>
        </div>
        <div className="interviewBtn">
          <Button className="left-btn" onClick={setPrevRecord}>
            <LeftOutlined className="interviewpageIcon" />
          </Button>
          <Button className="right-btn" onClick={setNextRecord}>
            <RightOutlined className="interviewpageIcon" />
          </Button>
          <Button className="sendMsgBtn">
            <MessageOutlined className="interviewpageIcon" />
            Send Message
          </Button>
          <Button className="sendEmailBtn">
            <MailOutlined className="interviewpageIcon" />
            Send Email
          </Button>
        </div>
      </div>
      <div className="interviewTabs">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <div className="tabBtn">
          <Button className="linkedinBtn">
            <LinkedinOutlined className="interviewpageIcon" />
            LinkedIn Profile
          </Button>
          <Button className="resumeBtn">
            <DownloadOutlined className="interviewpageIcon" />
            Download Resume
          </Button>
        </div>
      </div>
    </>
  );
}

export default InterviewInfo;
