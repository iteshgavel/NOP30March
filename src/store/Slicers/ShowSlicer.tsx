import { createSlice } from "@reduxjs/toolkit";
import { rDataType } from "../../Components/Candidate/DummyCandidateData";
const showSlice = createSlice({
  name: "displayedCandidate",
  initialState: {
    key: 1,

    Name: "John Brown",

    Email: "fpaice0@google.nl",

    "SSC CGPA": 8.78,

    "SSC %": 87.8,

    "HSC CGPA": 7.49,

    "HSC %": 74.9,

    "Diploma Branch": "",

    "Diploma CGPA": "",

    "Diploma %": "",

    Reg: {
      RollNo: "201901091",
    },

    "UG Course": "B Tech",

    "UG Branch": "Computer Science and Engineering",

    "UG CGPA": 7.8,

    "UG %": 78,

    "PG Course": "M Tech",

    "PG Branch": "Information Science",

    "PG CGPA": 8.92,

    "PG %": 89.2,

    "Applied for": "12 Month Internship",

    College: "DAIICT",

    Backlog: 0,

    Rank: 1,
    PhoneNo: 1234567890,

    Company: "MAQ Software",

    Designation: "Software Engineer",

    "Year of Experience": 1,
  },
  reducers: {
    setDisplay: (state: rDataType, action) => {
      return action.payload.candidate;
    },
  },
});
export const { setDisplay } = showSlice.actions;
export default showSlice.reducer;
