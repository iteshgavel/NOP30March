import React from "react";
import InterviewGrid from "../Components/Interview/InterviewGrid";
//import "../Components/Interview/Interview.css";

function Interview(props: any) {
  return (
    <>
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
