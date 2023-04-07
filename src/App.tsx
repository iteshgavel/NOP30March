import React from "react";
import "./App.css";
import Nav from "./Components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, ConfigProvider } from "antd";
import Home from "./Pages/Home";
import Candidate from "./Pages/Candidate";
import Interview from "./Pages/Interview";
import Summary from "./Pages/HireSummary";
import Header from "./Components/Header/Header";
import CandidateInfo from "./Components/Candidate/CandidateInformation/CandidateInfomation";
import { rDataType, rdata } from "./Components/Candidate/DummyCandidateData";
import { iDataType, idata } from "./Components/Interview/DummyInterviewData";
import InterviewInfo from "./Components/Interview/InterviewInfo";
import AddCandidate from "./Components/Candidate/AddCandidate/AddCandidate";
import FilterPanBar from "./Components/FilterPane/FilterPane";

function App() {
  const [searchedText, setSearchedText] = React.useState("");
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<rDataType[]>(rdata);
  const [showingCandidateInfo, setShowingCandidateInfo] =
    React.useState<rDataType>(content[0]);
  const [interviewContent, setInterviewContent] =
    React.useState<iDataType[]>(idata);
  const [showingInterviewInfo, setShowingInterviewInfo] =
    React.useState<iDataType>(interviewContent[0]);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#356966",
            fontFamily: "Segoe UI",
            fontSize: 18,
          },
        }}
      >
        {/* <BrowserRouter>
        <div className="App">
          <Header />
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
                      content={content}
                      setContent={setContent}
                      showingCandidateInfo={showingCandidateInfo}
                      setShowingCandidateInfo={setShowingCandidateInfo}
                    />
                  }
                />
                <Route
                  path="/Interview"
                  element={
                    <Interview
                      content={interviewContent}
                      setContent={setInterviewContent}
                      showingInterviewInfo={showingInterviewInfo}
                      setShowingInterviewInfo={setShowingInterviewInfo}
                    />
                  }
                />
                <Route path="/Summary" element={<Summary />} />
                <Route
                  path="/Candidate/Name"
                  id={showingCandidateInfo.Name}
                  element={
                    <CandidateInfo
                      setShowingCandidateInfo={setShowingCandidateInfo}
                      showingCandidateInfo={showingCandidateInfo}
                      content={content}
                      setContent={setContent}
                    />
                  }
                />
                <Route
                  path="/Interview/Info"
                  element={
                    <InterviewInfo
                      content={interviewContent}
                      setContent={setInterviewContent}
                      showingInterviewInfo={showingInterviewInfo}
                      setShowingInterviewInfo={setShowingInterviewInfo}
                    />
                  }
                />
                <Route
                  path="/Candidate/AddCandidate"
                  element={<AddCandidate />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter> */}
      <FilterPanBar setSearchedText={setSearchedText}
            setContent={setContent}/>
      </ConfigProvider>
    </>
  );
}

export default App;
