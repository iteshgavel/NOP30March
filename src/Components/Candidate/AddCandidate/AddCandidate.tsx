import React, { useState } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  InputNumber,
  Button,
  Dropdown,
  Space,
  Menu,
  Radio,
  Upload,
  Modal,
  message,
  Select,
  DatePicker,
} from "antd";
import {
  CaretDownOutlined,
  PlusCircleFilled,
  CloseOutlined,
  CheckOutlined,
  UploadOutlined,
  MinusCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./AddCandidate.css";

import type { RadioChangeEvent } from "antd";

//Validation Rules for input fields
const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddCandidateApp = () => {
  const [form] = Form.useForm();
  const [candidateName, setCandidateName] = useState("");
  const [value, setValue] = useState(1);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const certificateMenu = (
    <Radio.Group onChange={onChange} value={value}>
      <Menu>
        <Menu.Item>
          <Radio value={1}>SSC</Radio>
        </Menu.Item>
        <Menu.Item>
          <Radio value={2}>HSC</Radio>
        </Menu.Item>
        <Menu.Item>
          <Radio value={3}>Diploma</Radio>
        </Menu.Item>
        <Menu.Item>
          <Radio value={4}>Under Graduation</Radio>
        </Menu.Item>
        <Menu.Item>
          <Radio value={5}>Post Graduation</Radio>
        </Menu.Item>
      </Menu>
    </Radio.Group>
  );

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const handleOnSubmit = () => {
    form.validateFields().then(() => {
      setSubmitModalOpen(true);
    });
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      message.success("Successfully Added New Candidate!");
      console.log(values);
      form.resetFields();
    });
    setSubmitModalOpen(false);
  };

  return (
    <div className="formBody">
      <Form
        form={form}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        size="large"
        style={{ margin: 0, width: "100%" }}
      >
        <div className="personalDetail">
          <Row gutter={10}>
            <Col span={6}>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input
                  placeholder="Please enter user name"
                  onChange={(e) => setCandidateName(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ type: "email", required: true }]}
              >
                <Input placeholder="Please enter your email address" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true }]}
              >
                <Input placeholder="Please enter your phone number" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="linkedInProfile" label="LinkedIn Profile">
                <Input placeholder="Please enter your linkedIn profile" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={6}>
              <Form.Item
                name="appliedFor"
                label="Applied For"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Applying for"
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
            <Col span={6}>
              <Form.Item
                name="backlog"
                label="Backlog"
                rules={[{ required: true }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Mention any education backlogs"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="uploadresume"
                label="Upload Resume"
                //rules={[{ required: true }]}
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>
                    Click to Upload Resume
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item name="address" label="Address">
                <Input placeholder="Please enter your full address" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="educationDetail">
          <p>
            <strong>Education Details</strong>
          </p>

          <Form.List name="acadmicChild">
            {(fields, { add, remove }) => (
              <>
                <Row gutter={10} align="middle">
                  <Col span={4}>
                    <Dropdown overlay={certificateMenu} trigger={["click"]}>
                      <Button
                        type="link"
                        onClick={(e) => e.preventDefault()}
                        style={{ color: "black", paddingTop: "20px" }}
                      >
                        <Space>
                          Certification
                          <CaretDownOutlined className="filter-icon" />
                        </Space>
                      </Button>
                    </Dropdown>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      name="course"
                      label="Course"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Science" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      name="branch"
                      label="Branch"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Science/commerce/Arts" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      name="college"
                      label="College/Institute"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="College Name" />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Form.Item
                      name="percent"
                      label="Percentage"
                      rules={[
                        { type: "number", min: 0, max: 100, required: true },
                      ]}
                    >
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder={"%age"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Form.Item
                      name="cgpa"
                      label="CGPA"
                      rules={[
                        { required: true, type: "number", min: 0, max: 10 },
                      ]}
                    >
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder={"CGPA"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Form.Item
                      name="rank"
                      label="Rank"
                      rules={[{ type: "number" }]}
                    >
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder={"Rank"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={1}>
                    <PlusCircleFilled
                      className="AddIcon"
                      onClick={() => add()}
                    />
                  </Col>
                </Row>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={10} align="middle">
                    <Col span={4}>
                      <Dropdown overlay={certificateMenu} trigger={["click"]}>
                        <Button
                          type="link"
                          onClick={(e) => e.preventDefault()}
                          style={{ color: "black", paddingTop: "20px" }}
                        >
                          <Space>
                            Certification
                            <CaretDownOutlined className="filter-icon" />
                          </Space>
                        </Button>
                      </Dropdown>
                    </Col>
                    <Col span={5}>
                      <Form.Item
                        {...restField}
                        name="course"
                        label="Course"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Science" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        {...restField}
                        name="branch"
                        label="Branch"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Science/commerce/Arts" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        {...restField}
                        name="college"
                        label="College/Institute"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="College Name" />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <Form.Item
                        {...restField}
                        name="percent"
                        label="Percentage"
                        rules={[
                          { type: "number", min: 0, max: 100, required: true },
                        ]}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder={"%age"}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <Form.Item
                        {...restField}
                        name="cgpa"
                        label="CGPA"
                        rules={[
                          { required: true, type: "number", min: 0, max: 10 },
                        ]}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder={"CGPA"}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <Form.Item
                        {...restField}
                        name="rank"
                        label="Rank"
                        rules={[{ type: "number" }]}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder={"Rank"}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={1}>
                      <MinusCircleFilled
                        className="AddIcon"
                        onClick={() => remove(name)}
                      />
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Form.List>
        </div>
        <br />
        <div
          className="workExperienceDetail"
          style={{ alignContent: "center" }}
        >
          <p>
            <strong>Work Experience</strong>
          </p>

          <Form.List name="workExperienceChild">
            {(fields, { add, remove }) => (
              <>
                <Row gutter={10} align="middle">
                  <Col span={6}>
                    <Form.Item
                      name="organisationName"
                      label="Organisation Name"
                    >
                      <Input placeholder="Organisation Name 1" />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item name="designation" label="Designation">
                      <Input placeholder="UX Designer" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="startDate" label="Start Date">
                      <DatePicker
                        allowClear={false}
                        placeholder={"Start Date"}
                        placement={"bottomRight"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="endDate" label="End Date">
                      <DatePicker
                        allowClear={false}
                        placeholder={"End Date"}
                        placement={"bottomRight"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="experience" label="Year of Experience">
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder={"Year of Experience"}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={1}>
                    <PlusCircleFilled className="AddIcon" onClick={() => add()}/>
                  </Col>
                </Row>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={10} align="middle">
                    <Col span={6}>
                      <Form.Item
                        {...restField}
                        name="organisationName"
                        label="Organisation Name"
                      >
                        <Input placeholder="Organisation Name 1" />
                      </Form.Item>
                    </Col>
                    <Col span={5}>
                      <Form.Item
                        {...restField}
                        name="designation"
                        label="Designation"
                      >
                        <Input placeholder="UX Designer" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        {...restField}
                        name="startDate"
                        label="Start Date"
                      >
                        <DatePicker
                          allowClear={false}
                          placeholder={"Start Date"}
                          placement={"bottomRight"}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item {...restField} name="endDate" label="End Date">
                        <DatePicker
                          allowClear={false}
                          placeholder={"End Date"}
                          placement={"bottomRight"}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        {...restField}
                        name="experience"
                        label="Year of Experience"
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder={"Year of Experience"}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={1}>
                      <MinusCircleFilled className="AddIcon" onClick={() => remove(name)}/>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Form.List>

          {/* <Row gutter={10} align="middle">
            <Col span={6}>
              <Form.Item name="organisationName" label="Organisation Name">
                <Input placeholder="Organisation Name 1" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item name="designation" label="Designation">
                <Input placeholder="UX Designer" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="startDate" label="Start Date">
                <DatePicker
                  allowClear={false}
                  placeholder={"Start Date"}
                  placement={"bottomRight"}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="endDate" label="End Date">
                <DatePicker
                  allowClear={false}
                  placeholder={"End Date"}
                  placement={"bottomRight"}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="experience" label="Year of Experience">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder={"Year of Experience"}
                />
              </Form.Item>
            </Col>
            <Col span={1}>
              <PlusCircleFilled className="AddIcon" />
            </Col>
          </Row> */}
        </div>
        <br />
        <br />
        <Row justify="end">
          <Col>
            <Link to="/Candidate">
              <Button icon={<CloseOutlined />}>Cancel</Button>
            </Link>
          </Col>
          <Col>
            <Button
              icon={<CheckOutlined />}
              style={{ marginLeft: 20 }}
              onClick={() => handleOnSubmit()}
              type="primary"
            >
              Submit
            </Button>
            <Modal
              closable={false}
              title="Are you sure you want to add new candidate?"
              centered
              open={submitModalOpen}
              onOk={handleSave}
              onCancel={() => setSubmitModalOpen(false)}
            >
              <p>
                <u>{`Candidate Name: ${candidateName}`}</u>
              </p>
            </Modal>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCandidateApp;
