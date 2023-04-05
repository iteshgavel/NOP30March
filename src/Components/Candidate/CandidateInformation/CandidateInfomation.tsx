import React from "react";
import { Table,Breadcrumb, Button, Rate } from "antd";
import { Divider } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./CandidateInformation.css";
import { Link } from "react-router-dom";
import { rDataType } from "../DummyCandidateData";
import { DownloadOutlined, LeftOutlined, LinkedinOutlined, MailOutlined, PlusSquareFilled, RightOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { title } from "process";
;

interface CandidateInformationPropsType {
  content: rDataType[];
  setContent: React.Dispatch<React.SetStateAction<rDataType[]>>;
  showingCandidateInfo: rDataType;
  setShowingCandidateInfo: React.Dispatch<React.SetStateAction<rDataType>>;
}

function CandidateInfo(props: CandidateInformationPropsType) {
  const columnOfEducationDetails:ColumnsType<any> =[
    {title:"Certification",
     dataIndex:"Certification",
     key: "Certification",
    },
    {
     title:"Course",
     dataIndex:"Course",
     key: "Course",
    },
    {
      title:"Branch",
      dataIndex:"Branch",
      key: "Branch",
     },
     {
      title:"College",
      dataIndex:"College",
      key: "College",
     },
     {
      title:"Percentage",
      dataIndex:"Percentage",
      key: "Percentage",
     },
     {
      title:"CGPA",
      dataIndex:"CGPA",
      key: "CGPA",
     },
     {
      title:"Rank",
      dataIndex:"Rank",
      key: "Rank",
     }
  ]
  const educationDetailsData=[
   {
    Certification:"SSC",
    College:props.showingCandidateInfo.College,
    Course:"Science",
    Percentage:props.showingCandidateInfo["SSC %"],
    CGPA:props.showingCandidateInfo["SSC CGPA"],
    Rank:props.showingCandidateInfo.Rank
   },
   {
    Certification:"HSC",
    College:props.showingCandidateInfo.College,
    Course:"Science",
    Percentage:props.showingCandidateInfo["HSC %"],
    CGPA:props.showingCandidateInfo["HSC CGPA"],
    Rank:props.showingCandidateInfo.Rank
   },
   {
    Certification:"Diploma",
    Course:props.showingCandidateInfo["Diploma Branch"],
    College:props.showingCandidateInfo.College,
    Percentage:props.showingCandidateInfo["Diploma %"],
    CGPA:props.showingCandidateInfo["Diploma CGPA"],
    Rank:props.showingCandidateInfo.Rank
   },
   {
    Certification:"Under Graduate",
    College:props.showingCandidateInfo.College,
    Course:props.showingCandidateInfo["UG Course"],
    Percentage:props.showingCandidateInfo["UG %"],
    CGPA:props.showingCandidateInfo["UG CGPA"],
    Rank:props.showingCandidateInfo.Rank
   },
   {
    Certification:"Post Graduate",
    College:props.showingCandidateInfo.College,
    Course:props.showingCandidateInfo["PG Course"],
    Percentage:props.showingCandidateInfo["PG %"],
    CGPA:props.showingCandidateInfo["PG CGPA"],
    Rank:props.showingCandidateInfo.Rank
   },
  ]
  const columnOfWorkExperience:ColumnsType<any> =[
    {title:"Organization Name",
     dataIndex:"Organization Name",
     key: "Organization Name",
    },
    {
     title:"Designation",
     dataIndex:"Designation",
     key: "Designation",
    },
    {
      title:"Start Date",
      dataIndex:"Start Date",
      key: "Start Date",
     },
     {
      title:"End Date",
      dataIndex:"End Date",
      key: "End Date",
     },
     {
      title:"Year of Experience",
      dataIndex:"Year of Experience",
      key: "Year of Experience",
     }
  ]
  const workExperienceData=[
    {
      ["Organization Name"]:props.showingCandidateInfo.Company,
      ["Designation"]:props.showingCandidateInfo.Designation,
      ["Start Date"]:"28/03/2002",
      ["End Date"]:"28/03/2002",
      ["Year of Experience"]:props.showingCandidateInfo["Year of Experience"],


    }
  ]
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Education Details`,
      children: <>
      <div className="education-details">
          <Table className="educationDetailsTable" bordered columns={columnOfEducationDetails} dataSource={educationDetailsData} pagination={{position:[]}}/>
      </div>
      
      </>,
    },
    {
      key: "2",
      label: `Work Experience`,
      children: <>
      <div className="workExperience">
        <Table bordered columns={columnOfWorkExperience} dataSource={workExperienceData} pagination={{position:[]}}/>
      </div>
      </>,
    },
  ];
  function setNextRecord()
  { var record=0
    for(record=0;record<props.content.length;record++)
    {
      if(props.content[record].key==props.showingCandidateInfo.key)
      {
        break
      }
    }
    if(record==props.content.length-1)
    {
      props.setShowingCandidateInfo(props.content[0])
    }
    else
    {
      props.setShowingCandidateInfo(props.content[record+1])
    }
  }
  function setPrevRecord()
  { var record=0
    for(record=0;record<props.content.length;record++)
    {
      if(props.content[record].key==props.showingCandidateInfo.key)
      {
        break
      }
    }
    if(record==0)
    {
      props.setShowingCandidateInfo(props.content[props.content.length-1])
    }
    else
    {
      props.setShowingCandidateInfo(props.content[record-1])
    }
  }
  const starValue=(props.showingCandidateInfo.PhoneNo)%6
  
  const link = "/candidate/" + props.showingCandidateInfo.Name;
  return (
    <>
    <Breadcrumb
      
        className="candidateInfoBreadCrumb"
        separator={">"}
        items={[
          {
            title: <Link to="/candidate">Candidate Details</Link>,
          },
          {
            title: <>{props.showingCandidateInfo.Name}</>,
          },
        ]}
      />
    <div className="candidateInformationContainer">
      <div className="generalInformation">
        <div className="image"></div>
        <div className="information">
        <h1>{props.showingCandidateInfo.Name}</h1>
        <div className="shortInfo">
        <h5>{props.showingCandidateInfo["Applied for"]} * {props.showingCandidateInfo.Email} * {props.showingCandidateInfo.PhoneNo}</h5>
        </div>
        <Rate value={starValue} disabled character={<PlusSquareFilled />} style={{ color: "#FF9736" }} />
        </div>
        <div className="links">
        <Button className='left-btn' onClick={setPrevRecord}><LeftOutlined /></Button>
        <Button className='right-btn'  onClick={setNextRecord}><RightOutlined/></Button>
        <Button className='send-email-btn'><MailOutlined />Send Email</Button>
        </div>
      </div>
      <Tabs
        size="large"
        tabBarStyle={{ width: "150%" }}
        className="tabOfCandidateInformation"
        defaultActiveKey="1"
        items={items}
      />
      <div className="belowButtons">
      <Button className='linkedin-btn'><LinkedinOutlined />LinkedIn Profile</Button>
      <Button className='resume-btn'><DownloadOutlined />Download Resume</Button>
      </div>
    </div>
    </>
  );
}

export default CandidateInfo;
