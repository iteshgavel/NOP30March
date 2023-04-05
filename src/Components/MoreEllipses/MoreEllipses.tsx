import React from "react";
import { Button, Popover, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import "./MoreEllipses.css";

const sendEmail = () => {
  console.log("Email sent to candidate...!");
};

const editCandidate = () => {
  console.log("Candidate edited...!");
};

const deleteCandidate = () => {
  console.log("Candidate deleted...!");
};

const content = (
  <Space direction="vertical">
    <Button className="button" type="link" onClick={sendEmail}>
      Send Email
    </Button>
    <Button className="button" type="link" onClick={editCandidate}>
      Edit Candidate
    </Button>
    <Button className="button" type="link" onClick={deleteCandidate}>
      Delete
    </Button>
  </Space>
);

const MoreEllipsestsx = () => {
  return (
    <>
      <div className="ellipsesBody">
        <Popover content={content} trigger={"click"} placement="left">
          <MoreOutlined />
        </Popover>
      </div>
    </>
  );
};

export default MoreEllipsestsx;
