import React, { useState } from "react";
import { Form, Input, Row, Col, Button } from "antd";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const PersonalDetail = (props: any) => {
  const [name, setName] = useState(props.personal.name);
  const [email, setEmail] = useState(props.personal.email);

  const onFinish = (values: any) => {
    console.log(values);
    props.setPersonal({name: name, email: email});
    props.callPersonal();
  };

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{ margin: 0 }}
    >
      <Row>
        <Col span={11}>
          <Form.Item
            name={["user", "name"]}
            label="Name"
            initialValue={name}
            //rules={[{ required: true}]}
          >
            <Input
              placeholder="Candidate Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            initialValue={email}
            //rules={[{ type: "email", required: true}]}
          >
            <Input
              placeholder="Candidate Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="end">
        <Col>
          <Button type="primary" htmlType="submit">
            Save and Next
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalDetail;
