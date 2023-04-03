import React, { useState } from "react";
import { Button, Form, Select, Row, Col, message } from "antd";
import UploadCandidateResume from "./UploadCandidateResume";

const validateMessages = {
  required: "${label} is required!",
};

const AppliedFor = (props: any) => {
  // const [applyingFor, setApplyingFor] = useState(props.candidateApplyingFor);
  const [applyingFor, setApplyingFor] = useState(props.applyingFor.applyingFor);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setApplyingFor(value);
  };

  const onFinish = (values: any) => {
    message.success("Candidate Added Successfully.");
    //props.setCandidateApplyingFor(applyingFor);
    props.setApplyingFor({applyingFor:applyingFor});
    props.modalOnOk();
    props.setCurrent(0);
    console.log({ values });
    
    props.resetState();
  };

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      labelAlign="left"
      validateMessages={validateMessages}
      style={{ margin: 0 }}
    >
      <Row justify={"start"}>
        <Col span={11}>
          <Form.Item
            name={["applying", "for"]}
            label="Applying For"
            initialValue={applyingFor}
            //rules={[{ required: true }]}
          >
            <Select
              placeholder="Applying for"
              onChange={handleChange}
              options={[
                {
                  value: "2 Month Internship",
                  label: "2 Month Internship",
                },
                {
                  value: "6 Month Internship",
                  label: "6 Month Internship",
                },
                {
                  value: "12 Month Internship",
                  label: "12 Month Internship",
                },
                {
                  value: "6 Month Internship + Full Time",
                  label: "6 Month Internship + Full Time",
                },
                {
                  value: "12 Month Internship + Full Time",
                  label: "12 Month Internship + Full Time",
                },
                {
                  value: "Full Time",
                  label: "Full Time",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["candidate", "resume"]}
            label="Resume"
            valuePropName="fileList"
            //rules={[{ required: true }]}
          >
            <UploadCandidateResume />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="end">
        <Col>
          <Button onClick={() => props.callRoleAppliedPrev()}>Previous</Button>
        </Col>
        <Col>
          <Button style={{ marginLeft: 20 }} type="primary" htmlType="submit">
            Save and Next
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AppliedFor;
