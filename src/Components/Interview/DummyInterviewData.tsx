import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";

export interface iDataType {
  key: React.Key;

  Name: string;

  Position: string;

  Date: any;

  Time: any;

  Status: any;

  Start: any;
}

export let idata: iDataType[] = [
  {
    key: 1,

    Name: "John Brown",

    Position: "Software Engineer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 2,

    Name: "Joe Black",

    Position: "UX Designer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 3,

    Name: "Jim Green",

    Position: "Developer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 4,

    Name: "Jim Red",

    Position: "Developer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 5,

    Name: "John Brown",

    Position: "Software Engineer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 6,

    Name: "Joe Black",
    Position: "Developer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 7,

    Name: "Jim Green",

    Position: "Software Engineer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },

  {
    key: 8,

    Name: "Jim Red",

    Position: "Developer",

    Date: "30/3/2023",

    Time: "11:00",

    Status: "Round1",

    Start: <DoubleRightOutlined />,
  },
];
