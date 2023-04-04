import React from "react";
import { Divider } from "antd";

import Nav from "./Components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Candidate from "./Pages/Candidate";
import Interview from "./Pages/Interview";
import Summary from "./Pages/HireSummary";
import Header from "./Components/Header/Header";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import CandidateInfo from "./Components/Candidate/CandidateInformation/CandidateInfomation";
import InterviewInfo from "./Components/Interview/InterviewInfo";
import "./App.css";
import AddCandidate from "./Components/Candidate/AddCandidate/AddCandidate"

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Divider style={{margin: 0}}/>
          <div className="main">
            <Nav collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="content" style={{ width: "100%" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route
                  path="/Candidate"
                  element={
                    <Candidate
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
                    />
                  }
                />
                <Route path="/Interview" element={<Interview />} />
                <Route path="/HireSummary" element={<Summary />} />
                <Route path="/Candidate/Name" element={<CandidateInfo />} />
                <Route path="/Interview/Info" element={<InterviewInfo />} />
                <Route path="/Candidate/AddCandidate" element={<AddCandidate/>} />
              </Routes>
            </div>
          </div>
          <RemoveScrollBar />
        </div>
      </BrowserRouter>
      {/* <AddCandidate/> */}
    </>
  );
}

export default App;
