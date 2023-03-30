import React, { useState } from "react";
import { Form, Input, Row, Col, DatePicker, Button, Space } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

const App = (props: any) => {
  const [company, setCompany] = useState(props.candidateEmployer);
  const [position, setPosition] = useState(props.candidateDesignation);
  const [startDate, setStartDate] = useState(props.candidateStartDate);
  const [endDate, setEndDate] = useState(props.candidateEndDate);

  const onFinish = (values: any) => {
    console.log(values);
    props.setCandidateEmployer(company);
    props.setCandidateDesignation(position);
    props.setCandidateStartDate(startDate);
    props.setCandidateEndDate(endDate);
    props.callEmploymentNext();
  };

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      style={{ margin: 0 }}
      autoComplete="off"
    >
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <>
                <Row>
                  <Col span={11}>
                    <Form.Item
                      {...restField}
                      name={["employer", "name"]}
                      label="Employer Name"
                      initialValue={company}
                    >
                      <Input
                        placeholder={"Name of the Company"}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={2}>
                    <Form.Item
                      {...restField}
                      name={["designation", "name"]}
                      label="Designation"
                      initialValue={position}
                    >
                      <Input
                        placeholder={"Name of the position"}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={11}>
                    <Form.Item
                      {...restField}
                      name={["start", "date"]}
                      label="Start Date"
                      initialValue={startDate}
                    >
                      <DatePicker
                        placeholder={"Start Date"}
                        onChange={(val) => setStartDate(val)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={2}>
                    <Form.Item
                      name={["end", "date"]}
                      label="End Date"
                      initialValue={endDate}
                    >
                      <DatePicker
                        placeholder={"End Date"}
                        placement={"bottomRight"}
                        onChange={(val) => setEndDate(val)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <CloseOutlined onClick={() => remove(name)} />
              </>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <br />
      <Row justify="end">
        <Col>
          <Button onClick={() => props.callEmploymentPrev()}>Previous</Button>
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

export default App;
