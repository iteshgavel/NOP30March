import React from "react";

import { Divider, Avatar, Popover, Tooltip, Image, Layout, Space } from "antd";
import { QuestionOutlined, FileDoneOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import "./Header.css";
// USER DETAILS
const avatarURL =
  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
const avatarName = "First Middle Last";
const avatarEmail = "user@maqsoftware.com";
const avatarDesignation = "Associate Software Engineer";

//JavaScript logic to truncate text upto length = 35
function truncateString(str: string) {
  if (str.length <= 35) return str;
  return str.slice(0, 32) + "...";
}

const MAQLogo =
  "https://www.incimages.com/uploaded_files/inc5000company/maqsoftware_logo_fullcolor_822.png";

const Signout = () => {
  console.log("Signed out...");
};
// Training Redirected Page
const Training = () => {
  const trainingURL = "https://www.google.com/";
  window.open(trainingURL);
};
// Spport Email Function
const SupportEmail = () => {
  console.log("Support Email Triggered");
  window.location.href = "mailto:sales@MAQSoftware.com";
};

const content = (
  <>
    <Space align="center">
      <div className="avatarDetailImage">
        <Avatar
          size={85}
          style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
        >
          U
        </Avatar>
      </div>
      <Divider
        type="vertical"
        style={{ margin: 0, padding: 0, height: "80px" }}
      />
      <div className="avatarDetail">
        <div className="avatarName">{truncateString(avatarName)}</div>
        <div className="avatarEmail">{truncateString(avatarEmail)}</div>
        <div className="avatarDesignation">
          {truncateString(avatarDesignation)}
        </div>
      </div>
    </Space>

    <div className="signOutBar" onClick={Signout}>
      Sign out
    </div>
  </>
);

export default function HeaderApp() {
  return (
    <>
      <Layout className="headerBody">
        <Header style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <div className="header">
            <div className="logoImage">
              <Image width={130} src={MAQLogo} preview={false} />
            </div>
            <div className="trainingIcon" onClick={Training}>
              <Tooltip title="Training">
                <FileDoneOutlined className="training" />
              </Tooltip>
            </div>
            <div className="supportIcon" onClick={SupportEmail}>
              <Tooltip title="Support">
                <QuestionOutlined className="support" />
              </Tooltip>
            </div>
            <div className="userPopUp">
              <Tooltip title="User">
                <Popover
                  placement="bottomRight"
                  content={content}
                  trigger="click"
                >
                  <Avatar
                    size={30}
                    style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                  >
                    U
                  </Avatar>
                </Popover>
              </Tooltip>
            </div>
          </div>
        </Header>
      </Layout>
    </>
  );
}
