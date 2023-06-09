import React from "react";
import { Avatar, Space } from "antd";
import MoreEllipses from "../MoreEllipses/MoreEllipses";

export interface rDataType {
  key: React.Key;
  Name: string;
  Email: string;
  ["SSC CGPA"]: number;
  ["SSC %"]: number;
  ["HSC CGPA"]: number;
  ["HSC %"]: number;
  ["Diploma Branch"]: string;
  ["Diploma CGPA"]: number | any;
  ["Diploma %"]: number | any;
  Reg: {
    ["RollNo"]: string;
  };
  ["UG Course"]: string;
  ["UG Branch"]: string;
  ["UG CGPA"]: number;
  ["UG %"]: number;
  ["PG Course"]: string;
  ["PG Branch"]: string;
  ["PG CGPA"]: number | any;
  ["PG %"]: number | any;
  ["Applied for"]: string;
  College: string;
  Backlog: number;
  Rank: number;
  RankEllipses: any;
  PhoneNo: number;
  Company: string;
  Designation: string;
  ["Year of Experience"]: number | any;
}

export let rdata: rDataType[] = [
  {
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
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">1</div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 1234567890,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },
  {
    key: 2,
    Name: "Joe Black",
    Email: "proscow1@yellowpages.com",
    "SSC CGPA": 9.2,
    "SSC %": 92,
    "HSC CGPA": 8.79,
    "HSC %": 87.9,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201901456",
    },
    "UG Course": "BE",
    "UG Branch": "Computer Science",
    "UG CGPA": 8.94,
    "UG %": 89.4,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "12 Months Internship + Full Time",
    College: "Nirma",
    Backlog: 0,
    Rank: 2,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          2
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 9989030948,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },

  {
    key: 3,
    Name: "Jim Green",
    Email: "csnook2@wikipedia.org",
    "SSC CGPA": 9.43,
    "SSC %": 94.3,
    "HSC CGPA": 8.31,
    "HSC %": 83.1,
    "Diploma Branch": "",

    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201908345",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 7.78,
    "UG %": 77.8,
    "PG Course": "",
    "PG Branch": "",

    "PG CGPA": null,
    "PG %": null,
    "Applied for": "2 Month Internship",
    College: "PDPU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 2341536567,
    Company: "",
    Designation: "",
    "Year of Experience": null,
  },

  {
    key: 4,
    Name: "Jim Red",
    Email: "dhallowes3@disqus.com",
    "SSC CGPA": 7.89,
    "SSC %": 78.9,
    "HSC CGPA": 7.6,
    "HSC %": 76,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201902345",
    },
    "UG Course": "BSc",
    "UG Branch": "Information Technology",
    "UG CGPA": 8.56,
    "UG %": 85.6,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "DDU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 1234567890,
    Company: "MAQ Software",
    Designation: "Software Engineer 2",
    "Year of Experience": 3,
  },

  {
    key: 5,
    Name: "John Brown",
    Email: "clynagh4@amazon.co.jp",
    "SSC CGPA": 8.12,
    "SSC %": 81.2,
    "HSC CGPA": 9.12,
    "HSC %": 91.2,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201987447",
    },
    "UG Course": "BE",
    "UG Branch": "Computer Science",
    "UG CGPA": 9.32,
    "UG %": 93.2,
    "PG Course": "M.E",
    "PG Branch": "Computer Technology",
    "PG CGPA": 9.12,
    "PG %": 91.2,
    "Applied for": "6 Month Internship + Full Time",
    College: "PDPU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 6758299928,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 2,
  },

  {
    key: 6,
    Name: "Joe Black",
    Email: "acd@gmail.com",
    "SSC CGPA": 7.9,
    "SSC %": 79,
    "HSC CGPA": 8.1,
    "HSC %": 81,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "2019y3737",
    },
    "UG Course": "B Tech",
    "UG Branch": "Computer Science and Engineering",
    "UG CGPA": 8.51,
    "UG %": 85.1,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "Full Time",
    College: "DAIICT",
    Backlog: 0,
    Rank: 2,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          2
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 1345689073,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },

  {
    key: 7,
    Name: "Jim Green",
    Email: "rhaggar6@tinyurl.com",
    "SSC CGPA": 8.59,
    "SSC %": 85.9,
    "HSC CGPA": 8.92,
    "HSC %": 89.2,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201973747",
    },
    "UG Course": "B Sc",
    "UG Branch": "Information Technology",
    "UG CGPA": 7.92,
    "UG %": 79.2,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "2 Month Internship",
    College: "DDU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 5647831894,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },

  {
    key: 8,
    Name: "Jim Red",
    Email: "akixc@about.com",
    "SSC CGPA": 9.33,
    "SSC %": 93.3,
    "HSC CGPA": 9.17,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201984850",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.09,
    "UG %": 90,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Nirma",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4561890482,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },
  {
    key: 9,
    Name: "Cartar Red",
    Email: "akixcarter@about.com",
    "SSC CGPA": 9.53,
    "SSC %": 93.3,
    "HSC CGPA": 9.17,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201990850",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.06,
    "UG %": 80,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Nirmala",
    Backlog: 0,
    Rank: 6,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          6
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4561890682,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 4,
  },
  {
    key: 10,
    Name: "Cartar Pink",
    Email: "jimcarter@about.com",
    "SSC CGPA": 9.53,
    "SSC %": 93.3,
    "HSC CGPA": 9.37,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "203990850",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.06,
    "UG %": 87,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Harvard",
    Backlog: 0,
    Rank: 6,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          6
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4561890382,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 9,
  },
  {
    key: 11,
    Name: "Sam Carrun",
    Email: "samcurr@gmail.com",
    "SSC CGPA": 8.53,
    "SSC %": 98.3,
    "HSC CGPA": 9.17,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201440860",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.06,
    "UG %": 80,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Oxford",
    Backlog: 0,
    Rank: 6,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          6
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4567890682,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 0,
  },
  {
    key: 12,
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
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 1234567890,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },
  {
    key: 13,
    Name: "Joe Black",
    Email: "proscow1@yellowpages.com",
    "SSC CGPA": 9.2,
    "SSC %": 92,
    "HSC CGPA": 8.79,
    "HSC %": 87.9,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201901456",
    },
    "UG Course": "BE",
    "UG Branch": "Computer Science",
    "UG CGPA": 8.94,
    "UG %": 89.4,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "12 Months Internship + Full Time",
    College: "Nirma",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 9989030948,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },

  {
    key: 14,
    Name: "Jim Green",
    Email: "csnook2@wikipedia.org",
    "SSC CGPA": 9.43,
    "SSC %": 94.3,
    "HSC CGPA": 8.31,
    "HSC %": 83.1,
    "Diploma Branch": "",

    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201908345",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 7.78,
    "UG %": 77.8,
    "PG Course": "",
    "PG Branch": "",

    "PG CGPA": null,
    "PG %": null,
    "Applied for": "2 Month Internship",
    College: "PDPU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 2341536567,
    Company: "",
    Designation: "",
    "Year of Experience": null,
  },

  {
    key: 15,
    Name: "Jim Red",
    Email: "dhallowes3@disqus.com",
    "SSC CGPA": 7.89,
    "SSC %": 78.9,
    "HSC CGPA": 7.6,
    "HSC %": 76,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201902345",
    },
    "UG Course": "BSc",
    "UG Branch": "Information Technology",
    "UG CGPA": 8.56,
    "UG %": 85.6,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "DDU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 1234567890,
    Company: "MAQ Software",
    Designation: "Software Engineer 2",
    "Year of Experience": 3,
  },

  {
    key: 16,
    Name: "John Brown",
    Email: "clynagh4@amazon.co.jp",
    "SSC CGPA": 8.12,
    "SSC %": 81.2,
    "HSC CGPA": 9.12,
    "HSC %": 91.2,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201987447",
    },
    "UG Course": "BE",
    "UG Branch": "Computer Science",
    "UG CGPA": 9.32,
    "UG %": 93.2,
    "PG Course": "M.E",
    "PG Branch": "Computer Technology",
    "PG CGPA": 9.12,
    "PG %": 91.2,
    "Applied for": "6 Month Internship + Full Time",
    College: "PDPU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 6758299928,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 2,
  },

  {
    key: 17,
    Name: "Joe Black",
    Email: "acd@gmail.com",
    "SSC CGPA": 7.9,
    "SSC %": 79,
    "HSC CGPA": 8.1,
    "HSC %": 81,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "2019y3737",
    },
    "UG Course": "B Tech",
    "UG Branch": "Computer Science and Engineering",
    "UG CGPA": 8.51,
    "UG %": 85.1,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "Full Time",
    College: "DAIICT",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 1345689073,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },

  {
    key: 18,
    Name: "Jim Green",
    Email: "rhaggar6@tinyurl.com",
    "SSC CGPA": 8.59,
    "SSC %": 85.9,
    "HSC CGPA": 8.92,
    "HSC %": 89.2,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201973747",
    },
    "UG Course": "B Sc",
    "UG Branch": "Information Technology",
    "UG CGPA": 7.92,
    "UG %": 79.2,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "2 Month Internship",
    College: "DDU",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 5647831894,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },

  {
    key: 19,
    Name: "Jim Red",
    Email: "akixc@about.com",
    "SSC CGPA": 9.33,
    "SSC %": 93.3,
    "HSC CGPA": 9.17,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201984850",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.09,
    "UG %": 90,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Nirma",
    Backlog: 0,
    Rank: 1,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          1
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4561890482,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 1,
  },
  {
    key: 20,
    Name: "Cartar Red",
    Email: "akixcarter@about.com",
    "SSC CGPA": 9.53,
    "SSC %": 93.3,
    "HSC CGPA": 9.17,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201990850",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.06,
    "UG %": 80,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Nirmala",
    Backlog: 0,
    Rank: 6,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          6
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4561890682,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 4,
  },
  {
    key: 21,
    Name: "Cartar Pink",
    Email: "jimcarter@about.com",
    "SSC CGPA": 9.53,
    "SSC %": 93.3,
    "HSC CGPA": 9.37,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "203990850",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.06,
    "UG %": 87,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Harvard",
    Backlog: 0,
    Rank: 6,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          6
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4561890382,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 9,
  },
  {
    key: 22,
    Name: "Sam Carrun",
    Email: "samcurr@gmail.com",
    "SSC CGPA": 8.53,
    "SSC %": 98.3,
    "HSC CGPA": 9.17,
    "HSC %": 91.7,
    "Diploma Branch": "",
    "Diploma CGPA": "",
    "Diploma %": "",
    Reg: {
      RollNo: "201440860",
    },
    "UG Course": "BCA",
    "UG Branch": "Information Technology",
    "UG CGPA": 9.06,
    "UG %": 80,
    "PG Course": "",
    "PG Branch": "",
    "PG CGPA": null,
    "PG %": null,
    "Applied for": "6 Month Internship",
    College: "Oxford",
    Backlog: 0,
    Rank: 6,
    RankEllipses: (
      <div className="finalFeedback">
        <div className="rank">
          6
        </div>
        <div className="ellipses" style={{ marginLeft: "auto" }}>
          <MoreEllipses />
        </div>
      </div>
    ),
    PhoneNo: 4567890682,
    Company: "MAQ Software",
    Designation: "Software Engineer",
    "Year of Experience": 0,
  },
];
