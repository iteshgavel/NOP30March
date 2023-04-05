import React from "react";
import InterviewGrid from "../Components/Interview/InterviewGrid";
import "../Components/Interview/Interview.css";

function Interview(props: any) {
  return (
    <>
      <p className="interview"> Interview </p>

      <div className="Interview-header">
        <span style={{ fontSize: "30px", fontFamily: "Segoe UI" }}>
          Candidates
        </span>
      </div>

      <InterviewGrid
        content={props.interviewContent}
        setContent={props.setInterviewContent}
        showingInterviewInfo={props.showingInterviewInfo}
        setShowingInterviewInfo={props.setShowingInterviewInfo}
      />
    </>
  );
}

export default Interview;
