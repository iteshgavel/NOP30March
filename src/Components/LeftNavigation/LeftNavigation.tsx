import React, { useState, useEffect } from "react";
import "./LeftNavigation.css";
import { useLocation } from "react-router-dom";

import { FileTextFilled } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";

function Nav(props: any) {
  const menuclass = props.collapsed ? "collapsed-menu" : "expanded-menu";
  const toggleCollapsed = () => {
    props.setCollapsed(!props.collapsed);
  };

  let navigate = useNavigate();

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("");

  useEffect(() => {
    const path = location.pathname;
    const key = getKeyFromPath(path);
    setSelectedKey(key);
  }, [location]);

  const getKeyFromPath = (path: any) => {
    if (path === "/") {
      return "1";
    } else if (path === "/Candidate") {
      return "2";
    } else if (path === "/Interview") {
      return "3";
    } else if (path === "/Summary") {
      return "4";
    } else return "1";
  };

  return (
    <div>
      <Menu
        mode="inline"
        inlineCollapsed={props.collapsed}
        className={menuclass}
        selectedKeys={[selectedKey]}
        items={[
          {
            key: "1",
            icon: <AiFillHome />,
            label: "Home",
            onClick: () => {
              navigate("/");
            },
          },
          {
            key: "2",
            icon: <BsFillPersonFill />,
            label: "Candidate",
            onClick: () => {
              navigate("/Candidate");
            },
          },
          {
            key: "3",
            icon: <BsPersonWorkspace />,
            label: "Interview",
            onClick: () => {
              navigate("/Interview");
            },
          },
          {
            key: "4",
            icon: <FileTextFilled />,
            label: "Hire Summary",
            onClick: () => {
              navigate("/Summary");
            },
          },
        ]}
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          position: "fixed",
          bottom: 0,
          marginLeft: "27px",
          height: "29px",
          width: "45px",
          color: "black",
        }}
      >
        {props.collapsed ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
      </Button>
    </div>
  );
}

export default Nav;
