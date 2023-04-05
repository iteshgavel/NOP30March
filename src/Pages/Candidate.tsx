import React from 'react';
import CandidateGrid from '../Components/Candidate/CandidateGrid';
function Candidate(props:any) {
  return (
    <div className="candidate">
       <CandidateGrid 
       collapsed={props.collapsed}
       setCollapsed={props.setCollapsed}
       content={props.content}
       setContent={props.setContent}
       showingCandidateInfo={props.showingCandidateInfo}
       setShowingCandidateInfo={props.setShowingCandidateInfo}
       />
    </div>
   
  )
}

export default Candidate