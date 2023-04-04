import React, { useState } from "react";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Divider,
  DatePicker,
} from "antd";

const App = (props: any) => {

  //const countEmployers = props.candidateEmployers.length;

  // const [company, setCompany] = useState(props.candidateEmployer);
  // const [position, setPosition] = useState(props.candidateDesignation);
  // const [startDate, setStartDate] = useState(props.candidateStartDate);
  // const [endDate, setEndDate] = useState(props.candidateEndDate);

  const [company, setCompany] = useState(props.employment.employer);
  const [position, setPosition] = useState(props.employment.designation);
  const [startDate, setStartDate] = useState(props.employment.startDate);
  const [endDate, setEndDate] = useState(props.employment.endDate);

  const onFinish = (values: any) => {
    console.log(values); 
    props.setEmployment({employer: company, designation: position, startDate: startDate, endDate: endDate});
    props.callEmploymentNext();
  };

  return (
    <>
      <Form
        layout="vertical"
        name="candidateEmployment"
        onFinish={onFinish}
        style={{ margin: 0 ,maxHeight: 600, overflowY: 'scroll'}}
      >
        <Row>
          <Col span={11}>
            <Form.Item name={["user", "employer"]} label="Employer Name" initialValue={company}>
              <Input placeholder="Company Name" onChange={(e) => setCompany(e.target.value)}/>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item name={["user", "designation"]} label="Designation" initialValue={position}>
              <Input placeholder="Designation" onChange={(e) => setPosition(e.target.value)}/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item name={["user", "startDate"]} label="Start Date" initialValue={startDate}>
              <DatePicker placeholder={"Start Date"} onChange={(val) => setStartDate(val)}/>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item name={["user", "endDate"]} label="End Date" initialValue={endDate}>
              <DatePicker placeholder={"End Date"} placement={"bottomRight"} onChange={(val) => setEndDate(val)}/>
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
        <br />
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <Row>
                    <Col span={11}>
                      <Form.Item {...restField} name={[name, "employer"]} label="Employer Name">
                        <Input placeholder={"Name of the Company"} />
                      </Form.Item>
                    </Col>
                    <Col span={11} offset={2}>
                      <Form.Item {...restField} name={[name, "designation"]} label="Designation">
                        <Input placeholder={"Name of the position"} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={11}>
                      <Form.Item {...restField} name={[name, "startDate"]} label="Start Date">
                        <DatePicker placeholder={"Start Date"} />
                      </Form.Item>
                    </Col>
                    <Col span={11} offset={2}>
                      <Form.Item {...restField} name={[name, "endDate"]} label="End Date">
                        <DatePicker
                          placeholder={"End Date"}
                          placement={"bottomRight"}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item>
                    <Button
                      type="dashed"
                      danger
                      onClick={() => remove(name)}
                      block
                      icon={<CloseOutlined />}
                    >
                      Remove Detail
                    </Button>
                  </Form.Item>
                  <Divider />
                </>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add more Employment Detail 
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

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
    </>
  );
};

export default App;
