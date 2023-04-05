import React,{useState,useEffect} from "react";
import "./LeftNavigation.css";

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
  const [selectedKey, setSelectedKey] = useState(

      localStorage.getItem('selectedKey') || 'defaultKey'
    
     );
    
    
    
    
     const handleMenuClick = (event:any) => {
    
      const key = event.key;
    
      setSelectedKey(key);
    
      localStorage.setItem('selectedKey', key);
    
     };
    
    
    
    
     useEffect(() => {
    
      localStorage.setItem('selectedKey', selectedKey);
    
     }, [selectedKey]);
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={props.collapsed}
        className={menuclass}
        onClick={handleMenuClick}

    selectedKeys={[selectedKey]}
        items={[
          {
            key: "1",
            icon: <AiFillHome />,
            label: "Home",
            onClick: () => {
              navigate("/Home");
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
