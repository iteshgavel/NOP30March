import React, { useState } from "react";
import { Divider, Steps } from "antd";
import NewCandidatePersonalDetail from "./NewCandidatePersonalDetail";
import NewCandidateAcademicDetail from "./NewCandidateAcademicDetail";
import NewCandidateEmploymentDetail from "./NewCandidateEmploymentDetail";
//import Employment from "./Employment";
import NewCandidateRoleApplied from "./NewCandidateRoleApplied";

const CandidateDetail = (props: any) => {
  //State to update candidateObject
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateSsc, setCandidateSsc] = useState("");
  const [candidateHsc, setCandidateHsc] = useState("");
  const [candidateDiplomaBranch, setCandidateDiplomaBranch] = useState("");
  const [candidateDiplomaScore, setCandidateDiplomaScore] = useState("");
  const [candidateUgCollege, setCandidateUgCollege] = useState("");
  const [candidateUgCourse, setCandidateUgCourse] = useState("");
  const [candidateUgBranch, setCandidateUgBranch] = useState("");
  const [candidateUgRollNo, setCandidateUgRollNo] = useState("");
  const [candidateUgBacklog, setCandidateUgBacklog] = useState("");
  const [candidateUgRank, setCandidateUgRank] = useState("");
  const [candidateUgScore, setCandidateUgScore] = useState("");
  const [candidatePgCourse, setCandidatePgCourse] = useState("");
  const [candidatePgBranch, setCandidatePgBranch] = useState("");
  const [candidatePgScore, setCandidatePgScore] = useState("");
  const [candidateEmployer, setCandidateEmployer] = useState("");
  const [candidateDesignation, setCandidateDesignation] = useState("");
  const [candidateStartDate, setCandidateStartDate] = useState("");
  const [candidateEndDate, setCandidateEndDate] = useState("");
  const [candidateApplyingFor, setCandidateApplyingFor] = useState("");

  //state to change step in form
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const resetState = () => {
    setCandidateName("");
    setCandidateEmail("");
    setCandidateSsc("");
    setCandidateHsc("");
    setCandidateDiplomaBranch("");
    setCandidateDiplomaScore("");
    setCandidateUgCollege("");
    setCandidateUgCourse("");
    setCandidateUgBranch("");
    setCandidateUgRollNo("");
    setCandidateUgBacklog("");
    setCandidateUgRank("");
    setCandidateUgScore("");
    setCandidatePgCourse("");
    setCandidatePgBranch("");
    setCandidatePgScore("");
    setCandidateEmployer("");
    setCandidateDesignation("");
    setCandidateStartDate("");
    setCandidateEndDate("");
    setCandidateApplyingFor("");
  };

  const steps = [
    {
      title: "Personal Detail",
      content: (
        <NewCandidatePersonalDetail
          callPersonal={next}
          candidateName={candidateName}
          setCandidateName={setCandidateName}
          candidateEmail={candidateEmail}
          setCandidateEmail={setCandidateEmail}
        />
      ),
    },
    {
      title: "Academic Detail",
      content: (
        <NewCandidateAcademicDetail
          callAcademicNext={next}
          callAcademicPrev={prev}
          candidateSsc={candidateSsc}
          setCandidateSsc={setCandidateSsc}
          candidateHsc={candidateHsc}
          setCandidateHsc={setCandidateHsc}
          candidateDiplomaBranch={candidateDiplomaBranch}
          setCandidateDiplomaBranch={setCandidateDiplomaBranch}
          candidateDiplomaScore={candidateDiplomaScore}
          setCandidateDiplomaScore={setCandidateDiplomaScore}
          candidateUgCollege={candidateUgCollege}
          setCandidateUgCollege={setCandidateUgCollege}
          candidateUgCourse={candidateUgCourse}
          setCandidateUgCourse={setCandidateUgCourse}
          candidateUgBranch={candidateUgBranch}
          setCandidateUgBranch={setCandidateUgBranch}
          candidateUgRollNo={candidateUgRollNo}
          setCandidateUgRollNo={setCandidateUgRollNo}
          candidateUgBacklog={candidateUgBacklog}
          setCandidateUgBacklog={setCandidateUgBacklog}
          candidateUgRank={candidateUgRank}
          setCandidateUgRank={setCandidateUgRank}
          candidateUgScore={candidateUgScore}
          setCandidateUgScore={setCandidateUgScore}
          candidatePgCourse={candidatePgCourse}
          setCandidatePgCourse={setCandidatePgCourse}
          candidatePgBranch={candidatePgBranch}
          setCandidatePgBranch={setCandidatePgBranch}
          candidatePgScore={candidatePgScore}
          setCandidatePgScore={setCandidatePgScore}
        />
      ),
    },
    {
      title: "Past Employment",
      content: (
        <NewCandidateEmploymentDetail
          callEmploymentNext={next}
          callEmploymentPrev={prev}
          candidateEmployer={candidateEmployer}
          setCandidateEmployer={setCandidateEmployer}
          candidateDesignation={candidateDesignation}
          setCandidateDesignation={setCandidateDesignation}
          candidateStartDate={candidateStartDate}
          setCandidateStartDate={setCandidateStartDate}
          candidateEndDate={candidateEndDate}
          setCandidateEndDate={setCandidateEndDate}
        />
      ),
    },
    {
      title: "Role Applied",
      content: (
        <NewCandidateRoleApplied
          callRoleAppliedPrev={prev}
          modalOnOk={props.modalOnOk}
          candidateApplyingFor={candidateApplyingFor}
          setCandidateApplyingFor={setCandidateApplyingFor}
          setCurrent={setCurrent}
          resetState={resetState}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={current} items={items} size="small" />
      <Divider />
      <div>{steps[current].content}</div>
    </>
  );
};

export default CandidateDetail;
