import React, { useState } from "react";
import { Form, Input, Row, Col, InputNumber, Button } from "antd";

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

const Academic = (props: any) => {
  const [ssc, setSsc] = useState(props.candidateSsc);
  const [hsc, setHsc] = useState(props.candidateHsc);
  const [diplomaBranch, setDiplomaBranch] = useState(
    props.candidateDiplomaBranch
  );
  const [diplomaScore, setDiplomaScore] = useState(props.candidateDiplomaScore);
  const [ugCollege, setUgCollege] = useState(props.candidateUgCollege);
  const [ugCourse, setUgCourse] = useState(props.candidateUgCourse);
  const [ugBranch, setUgBranch] = useState(props.candidateUgBranch);
  const [ugRollNo, setUgRollNo] = useState(props.candidateUgRollNo);
  const [ugBacklog, setUgBacklog] = useState(props.candidateUgBacklog);
  const [ugRank, setUgRank] = useState(props.candidateUgRank);
  const [ugScore, setUgScore] = useState(props.candidateUgScore);
  const [pgCourse, setPgCourse] = useState(props.candidatePgCourse);
  const [pgBranch, setPgBranch] = useState(props.candidatePgBranch);
  const [pgScore, setPgScore] = useState(props.candidatePgScore);

  const onFinish = (values: any) => {
    console.log({ values });
    props.setCandidateSsc(ssc);
    props.setCandidateHsc(hsc);
    props.setCandidateDiplomaBranch(diplomaBranch);
    props.setCandidateDiplomaScore(diplomaScore);
    props.setCandidateUgCollege(ugCollege);
    props.setCandidateUgCourse(ugCourse);
    props.setCandidateUgBranch(ugBranch);
    props.setCandidateUgRollNo(ugRollNo);
    props.setCandidateUgBacklog(ugBacklog);
    props.setCandidateUgRank(ugRank);
    props.setCandidateUgScore(ugScore);
    props.setCandidatePgCourse(pgCourse);
    props.setCandidatePgBranch(pgBranch);
    props.setCandidatePgScore(pgScore);
    props.callAcademicNext();
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
            name={["ssc", "score"]}
            label="SSC Score"
            initialValue={ssc}
            //rules={[{ type: "number", min: 0, max: 100, required: true }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"SSC %"}
              onChange={(e) => setSsc(e)}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["hsc", "score"]}
            label="HSC Score"
            initialValue={hsc}
            //rules={[{ type: "number", min: 0, max: 100, required: true }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"HSC %"}
              onChange={(e) => setHsc(e)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={11}>
          <Form.Item
            name={["diploma", "branch"]}
            label="Diploma Branch"
            initialValue={diplomaBranch}
          >
            <Input
              placeholder="Diploma Branch"
              onChange={(e) => setDiplomaBranch(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["Diploma", "score"]}
            label="Diploma Score"
            initialValue={diplomaScore}
            //rules={[{ type: "number", min: 0, max: 100 }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"Diploma %"}
              onChange={(e) => setDiplomaScore(e)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={11}>
          <Form.Item
            name={["ug", "college"]}
            label="UG College"
            initialValue={ugCollege}
            //rules={[{ required: true }]}
          >
            <Input
              placeholder="UG College Name"
              onChange={(e) => setUgCollege(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["ug", "course"]}
            label="UG Course"
            initialValue={ugCourse}
            //rules={[{ required: true }]}
          >
            <Input
              placeholder="UG Course Name"
              onChange={(e) => setUgCourse(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={11}>
          <Form.Item
            name={["ug", "branch"]}
            label="UG Branch"
            initialValue={ugBranch}
            //rules={[{ required: true }]}
          >
            <Input
              placeholder="UG Branch Name"
              onChange={(e) => setUgBranch(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["ug", "rollno"]}
            label="UG Roll Number"
            initialValue={ugRollNo}
            //rules={[{ required: true }]}
          >
            <Input
              placeholder="UG Roll Number"
              onChange={(e) => setUgRollNo(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={5}>
          <Form.Item
            name={["ug", "backlog"]}
            label="UG Backlog"
            initialValue={ugBacklog}
            //rules={[{ required: true, type: "number", min: 0, max: 8 }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"UG Backlog"}
              onChange={(e) => setUgBacklog(e)}
            />
          </Form.Item>
        </Col>
        <Col span={5} offset={1}>
          <Form.Item
            name={["ug", "rank"]}
            label="UG Rank"
            initialValue={ugRank}
            //rules={[{ type: "number" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"UG Rank"}
              onChange={(e) => setUgRank(e)}
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={2}>
          <Form.Item
            name={["UG", "score"]}
            label="UG Score"
            initialValue={ugScore}
            //rules={[{ required: true, type: "number", min: 0, max: 100 }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"UG %"}
              onChange={(e) => setUgScore(e)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={11}>
          <Form.Item
            name={["pg", "course"]}
            label="PG Course"
            initialValue={pgCourse}
          >
            <Input
              placeholder="PG Course Name"
              onChange={(e) => setPgCourse(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={5} offset={2}>
          <Form.Item
            name={["pg", "branch"]}
            label="PG Branch"
            initialValue={pgBranch}
          >
            <Input
              placeholder="PG Branch Name"
              onChange={(e) => setPgBranch(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={5} offset={1}>
          <Form.Item
            name={["pg", "score"]}
            label="PG Score"
            initialValue={pgScore}
            //rules={[{ type: "number", min: 0, max: 100 }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"PG %"}
              onChange={(e) => setPgScore(e)}
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="end">
        <Col>
          <Button onClick={() => props.callAcademicPrev()}>Previous</Button>
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

export default Academic;
