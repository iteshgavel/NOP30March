import React from "react";
import InterviewGrid from "../Components/Interview/InterviewGrid";
import "../Components/Interview/Interview.css";

function Interview() {
  return (
    <>
      <div className="interview"> Interview </div>

      <div className="Interview-header">
          Candidates
      </div>

      <InterviewGrid />
    </>
  );
}

export default Interview;
