import React, { useState } from "react";
import { Divider, Steps } from "antd";
import NewCandidatePersonalDetail from "./NewCandidatePersonalDetail";
import NewCandidateAcademicDetail from "./NewCandidateAcademicDetail";
import NewCandidateEmploymentDetail from "./NewCandidateEmploymentDetail";
import NewCandidateRoleApplied from "./NewCandidateRoleApplied";

const CandidateDetail = (props: any) => {
  //State to update candidateObject

  const [personal, setPersonal] = useState({ name: "", email: "" });

  const [academic, setAcademic] = useState({
    ssc: { score: "" },
    hsc: { score: "" },
    diploma: { branch: "", score: "" },
    ug: {
      college: "",
      course: "",
      branch: "",
      rollNo: "",
      backlog: "",
      rank: "",
      score: "",
    },
    pg: {
      course: "",
      branch: "",
      score: ""
    }
  });

  const [employment, setEmployment] = useState({
    employer: "",
    designation: "",
    startDate: "",
    endDate: "",
  });

  //const [candidateApplyingFor, setCandidateApplyingFor] = useState("");
  const [applyingFor, setApplyingFor] = useState({ applyingFor: "" });

  //state to change step in form
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const resetState = () => {
    setPersonal({ name: "", email: "" });

    setAcademic({
      ssc: { score: "" },
      hsc: { score: "" },
      diploma: { branch: "", score: "" },
      ug: {
        college: "",
        course: "",
        branch: "",
        rollNo: "",
        backlog: "",
        rank: "",
        score: "",
      },
      pg: {
        course: "",
        branch: "",
        score: ""
      }
    })

    setEmployment({
      employer: "",
      designation: "",
      startDate: "",
      endDate: "",
    });

    setApplyingFor({ applyingFor: "" });
  };

  const steps = [
    {
      title: "Personal Detail",
      content: (
        <NewCandidatePersonalDetail
          callPersonal={next}
          personal={personal}
          setPersonal={setPersonal}
        />
      ),
    },
    {
      title: "Academic Detail",
      content: (
        <NewCandidateAcademicDetail
          callAcademicNext={next}
          callAcademicPrev={prev}
          academic={academic}
          setAcademic={setAcademic}
        />
      ),
    },
    {
      title: "Past Employment",
      content: (
        <NewCandidateEmploymentDetail
          callEmploymentNext={next}
          callEmploymentPrev={prev}
          employment={employment}
          setEmployment={setEmployment}
        />
      ),
    },
    {
      title: "Role Applied",
      content: (
        <NewCandidateRoleApplied
          callRoleAppliedPrev={prev}
          modalOnOk={props.modalOnOk}
          applyingFor={applyingFor}
          setApplyingFor={setApplyingFor}
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
