// import React, { useState } from "react";
// import {
//   Input,
//   Space,
//   Dropdown,
//   Menu,
//   Checkbox,
//   InputNumber,
//   Button,
//   Select,
// } from "antd";
// import { CaretDownOutlined, RedoOutlined } from "@ant-design/icons";
// import { rdata, rDataType } from "../Candidate/DummyCandidateData";
// import { SearchOutlined } from "@ant-design/icons";
// const { Option } = Select;

// //Dinamically getting all college names from table.
// function findUniqueCollege(data: rDataType[]) {
//   var c: any[] = [];
//   for (var i = 0; i < data.length; i++) {
//     c.push(data[i].College);
//   }
//   c = Array.from(new Set(c));
//   let d = c.map((item) => {
//     return {
//       value: item,
//       label: item,
//     };
//   });
//   return d;
// }

// //Dinamically getting all Applied for categories from table.
// function findUniqueAppliedFor(data: rDataType[]) {
//   var c: any[] = [];
//   for (var i = 0; i < data.length; i++) {
//     c.push(data[i]["Applied for"]);
//   }
//   c = Array.from(new Set(c));
//   let d = c.map((item) => {
//     return {
//       value: item,
//       label: item,
//     };
//   });
//   return d;
// }

// //Interface for dropdown option
// interface DropdownOption {
//   label: string;
//   value: string;
// }

// // Filter Bar layout finction
// const FilterPanBar = (props: any) => {
//   //getting unique college and Applied For
//   const uniqueCollege = findUniqueCollege(rdata);
//   const uniqueAppliedFor = findUniqueAppliedFor(rdata);

//   //Intialising states for college, Applied For and Academic Filter Dropdown
//   const [selectedOptionsCollege, setSelectedOptionsCollege] = useState<
//     DropdownOption[]
//   >([]);
//   const [selectedOptionsApplied, setSelectedOptionsApplied] = useState<
//     DropdownOption[]
//   >([]);
//   const [acadFilters, setAcadFilters] = useState({
//     SSC: {
//       comparision: "gte",
//       number: 0,
//     },
//     HSC: {
//       comparision: "gte",
//       number: 0,
//     },
//     UG: {
//       comparision: "gte",
//       number: 0,
//     },
//     PG: {
//       comparision: "gte",
//       number: 0,
//     },
//     Diploma: {
//       comparision: "gte",
//       number: 0,
//     },
//   });
   
//   //defining actions for Filter dropdown
//   const [openCollegeFilter, setOpenCollegeFilter] = useState(false);
//   const [openAppliedFilter, setOpenAppliedFilter] = useState(false);
//   const [openAcadFilter, setOpenAcadFilter] = useState(false);

//   //Clear Filter Functionality
//   const resetFilter = () => {
//     //Clear College Filter
//     setSelectedOptionsCollege([]);
//     //Clear Applied For Filter
//     setSelectedOptionsApplied([]);
//     //Clear Academic % Filter - working
//     setAcadFilters({
//       SSC: {
//         comparision: "gte",
//         number: 0,
//       },
//       HSC: {
//         comparision: "gte",
//         number: 0,
//       },
//       UG: {
//         comparision: "gte",
//         number: 0,
//       },
//       PG: {
//         comparision: "gte",
//         number: 0,
//       },
//       Diploma: {
//         comparision: "gte",
//         number: 0,
//       },
//     });
//   };

//   const handleOptionSelectCollege = (option: DropdownOption) => {
//     const isOptionSelected = selectedOptionsCollege.some(
//       (selectedOption) => selectedOption.value === option.value
//     );

//     if (isOptionSelected) {
//       setSelectedOptionsCollege(
//         selectedOptionsCollege.filter((o) => o.value !== option.value)
//       );
//     } else {
//       setSelectedOptionsCollege([...selectedOptionsCollege, option]);
//     }
//   };

//   const handleOptionSelectApplied = (option: DropdownOption) => {
//     const isOptionSelected = selectedOptionsApplied.some(
//       (selectedOption) => selectedOption.value === option.value
//     );

//     if (isOptionSelected) {
//       setSelectedOptionsApplied(
//         selectedOptionsApplied.filter((o) => o.value !== option.value)
//       );
//     } else {
//       setSelectedOptionsApplied([...selectedOptionsApplied, option]);
//     }
//   };

//   const CollegeMenu = (
//     <Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
//       {uniqueCollege.map((option) => (
//         <Menu.Item key={option.value}>
//           <Checkbox
//             checked={selectedOptionsCollege.some(
//               (o) => o.value === option.value
//             )}
//             onChange={() => handleOptionSelectCollege(option)}
//           >
//             {option.label}
//           </Checkbox>
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   const Appliedmenu = (
//     <Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
//       {uniqueAppliedFor.map((option) => (
//         <Menu.Item key={option.value}>
//           <Checkbox
//             checked={selectedOptionsApplied.some(
//               (o) => o.value === option.value
//             )}
//             onChange={() => handleOptionSelectApplied(option)}
//           >
//             {option.label}
//           </Checkbox>
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   const handleOpenCollegeFilterChange = (flag: boolean) => {
//     setOpenCollegeFilter(flag);
//   };

//   const handleOpenAppliedFilterChange = (flag: boolean) => {
//     setOpenAppliedFilter(flag);
//   };

//   const handleOpenAcadFilterChange = (flag: boolean) => {
//     setOpenAcadFilter(flag);
//   };

//   const selectSSC = (
//     <Select
//       value={acadFilters.SSC.comparision}
//       menuItemSelectedIcon
//       size="small"
//       defaultValue="gte"
//       style={{ width: 70 }}
//       onSelect={(option) => {
//         setAcadFilters((prev) => {
//           var x = { ...prev };
//           x.SSC.comparision = option;
//           return x;
//         });
//       }}
//     >
//       <Option value="gte">{">="}</Option>
//       <Option value="lte">{"<="}</Option>
//       <Option value="equal">{"="}</Option>
//     </Select>
//   );

//   const selectHSC = (
//     <Select
//       value={acadFilters.HSC.comparision}
//       menuItemSelectedIcon
//       size="small"
//       defaultValue="gte"
//       style={{ width: 70 }}
//       onSelect={(option) => {
//         setAcadFilters((prev) => {
//           var x = { ...prev };
//           x.HSC.comparision = option;
//           return x;
//         });
//       }}
//     >
//       <Option value="gte">{">="}</Option>
//       <Option value="lte">{"<="}</Option>
//       <Option value="equal">{"="}</Option>
//     </Select>
//   );

//   const selectUG = (
//     <Select
//       value={acadFilters.UG.comparision}
//       menuItemSelectedIcon
//       size="small"
//       defaultValue="gte"
//       style={{ width: 70 }}
//       onSelect={(option) => {
//         setAcadFilters((prev) => {
//           var x = { ...prev };
//           x.UG.comparision = option;
//           return x;
//         });
//       }}
//     >
//       <Option value="gte">{">="}</Option>
//       <Option value="lte">{"<="}</Option>
//       <Option value="equal">{"="}</Option>
//     </Select>
//   );

//   const selectPG = (
//     <Select
//       value={acadFilters.PG.comparision}
//       menuItemSelectedIcon
//       size="small"
//       defaultValue="gte"
//       style={{ width: 70 }}
//       onSelect={(option) => {
//         setAcadFilters((prev) => {
//           var x = { ...prev };
//           x.PG.comparision = option;
//           return x;
//         });
//       }}
//     >
//       <Option value="gte">{">="}</Option>
//       <Option value="lte">{"<="}</Option>
//       <Option value="equal">{"="}</Option>
//     </Select>
//   );

//   const selectDiploma = (
//     <Select
//       menuItemSelectedIcon
//       size="small"
//       defaultValue={acadFilters.Diploma.comparision}
//       style={{ width: 70 }}
//       value={acadFilters.Diploma.comparision}
//       onSelect={(option) => {
//         setAcadFilters((prev) => {
//           var x = { ...prev };
//           x.Diploma.comparision = option;
//           return x;
//         });
//       }}
//     >
//       <Option value="gte">{">="}</Option>
//       <Option value="lte">{"<="}</Option>
//       <Option value="equal">{"="}</Option>
//     </Select>
//   );

//   const AcadMenu = (
//     <Menu selectable={false}>
//       <Menu.Item key="SSC">
//         SSC{" "}
//         <InputNumber
//           style={{ marginLeft: 29, width: 150 }}
//           size="small"
//           min={0}
//           max={100}
//           width={8}
//           onChange={(number) => {
//             setAcadFilters((prev) => {
//               var x = { ...prev };
//               if (number !== null) x.SSC.number = number;
//               else x.SSC.number = 0;
//               return x;
//             });
//           }}
//           value={acadFilters.SSC.number}
//           addonBefore={selectSSC}
//           defaultValue={0}
//         />
//       </Menu.Item>

//       <Menu.Item key="HSC">
//         HSC{" "}
//         <InputNumber
//           style={{ marginLeft: 27, width: 150 }}
//           size="small"
//           min={0}
//           max={100}
//           width={8}
//           addonBefore={selectHSC}
//           value={acadFilters.HSC.number}
//           onChange={(number) => {
//             setAcadFilters((prev) => {
//               var x = { ...prev };
//               if (number !== null) x.HSC.number = number;
//               else x.HSC.number = 0;
//               return x;
//             });
//           }}
//           defaultValue={0}
//         />
//       </Menu.Item>
//       <Menu.Item key="UG">
//         UG{" "}
//         <InputNumber
//           style={{ marginLeft: 34, width: 150 }}
//           size="small"
//           min={0}
//           max={100}
//           width={8}
//           value={acadFilters.UG.number}
//           onChange={(number) => {
//             setAcadFilters((prev) => {
//               var x = { ...prev };
//               if (number !== null) x.UG.number = number;
//               else x.UG.number = 0;
//               return x;
//             });
//           }}
//           addonBefore={selectUG}
//           defaultValue={0}
//         />
//       </Menu.Item>
//       <Menu.Item key="PG">
//         PG{"     "}
//         <InputNumber
//           style={{ marginLeft: 35, width: 150 }}
//           size="small"
//           min={0}
//           max={100}
//           width={8}
//           onChange={(number) => {
//             setAcadFilters((prev) => {
//               var x = { ...prev };
//               if (number !== null) x.PG.number = number;
//               else x.PG.number = 0;
//               return x;
//             });
//           }}
//           addonBefore={selectPG}
//           defaultValue={0}
//           value={acadFilters.PG.number}
//         />
//       </Menu.Item>
//       <Menu.Item key="Diploma">
//         Diploma{" "}
//         <InputNumber
//           size="small"
//           min={0}
//           max={100}
//           width={8}
//           value={acadFilters.Diploma.number}
//           style={{ width: 150 }}
//           onChange={(number) => {
//             setAcadFilters((prev) => {
//               var x = { ...prev };
//               if (number !== null) x.Diploma.number = number;
//               else x.Diploma.number = 0;
//               return x;
//             });
//           }}
//           addonBefore={selectDiploma}
//           defaultValue={0}
//         />
//       </Menu.Item>
//       <Menu.Item>
//         <Button
//           onClick={() =>
//             setAcadFilters({
//               SSC: {
//                 comparision: "gte",
//                 number: 0,
//               },
//               HSC: {
//                 comparision: "gte",
//                 number: 0,
//               },
//               UG: {
//                 comparision: "gte",
//                 number: 0,
//               },
//               PG: {
//                 comparision: "gte",
//                 number: 0,
//               },
//               Diploma: {
//                 comparision: "gte",
//                 number: 0,
//               },
//             })
//           }
//         >
//           Clear Filter
//         </Button>
//       </Menu.Item>
//     </Menu>
//   );

//   React.useEffect(
//     () =>
//       props.setContent(() => {
//         console.log(acadFilters);
//         var prev: rDataType[] = rdata;
//         var c: rDataType[] = [];
//         for (var i = 0; i < prev.length; i++) {
//           var flagCollege = 0;
//           var flagApplied = 0;

//           if (selectedOptionsCollege.length === 0) flagCollege = 1;
//           for (var j = 0; j < selectedOptionsCollege.length; j++) {
//             if (prev[i].College === selectedOptionsCollege[j].value) {
//               flagCollege = 1;
//               break;
//             }
//           }
//           if (selectedOptionsApplied.length === 0) flagApplied = 1;
//           for (j = 0; j < selectedOptionsApplied.length; j++) {
//             if (prev[i]["Applied for"] === selectedOptionsApplied[j].value) {
//               flagApplied = 1;
//               break;
//             }
//           }

//           var flag = 1;
//           if (acadFilters.SSC.comparision === "gte") {
//             if (prev[i]["SSC %"] < acadFilters.SSC.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.SSC.comparision === "lte") {
//             if (prev[i]["SSC %"] > acadFilters.SSC.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.SSC.comparision === "equal") {
//             if (prev[i]["SSC %"] !== acadFilters.SSC.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.HSC.comparision === "gte") {
//             if (prev[i]["HSC %"] < acadFilters.HSC.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.HSC.comparision === "lte") {
//             if (prev[i]["HSC %"] > acadFilters.HSC.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.HSC.comparision === "equal") {
//             if (prev[i]["HSC %"] !== acadFilters.HSC.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.UG.comparision === "gte") {
//             if (prev[i]["UG %"] < acadFilters.UG.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.UG.comparision === "lte") {
//             if (prev[i]["UG %"] > acadFilters.UG.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.UG.comparision === "equal") {
//             if (prev[i]["UG %"] !== acadFilters.UG.number) {
//               flag = 0;
//             }
//           }

//           if (acadFilters.PG.comparision === "gte") {
//             if (prev[i]["PG %"] < acadFilters.PG.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.PG.comparision === "lte") {
//             if (prev[i]["PG %"] > acadFilters.PG.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.PG.comparision === "equal") {
//             if (prev[i]["PG %"] !== acadFilters.PG.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.Diploma.comparision === "gte") {
//             if (prev[i]["Diploma %"] < acadFilters.Diploma.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.Diploma.comparision === "lte") {
//             if (prev[i]["Diploma %"] > acadFilters.Diploma.number) {
//               flag = 0;
//             }
//           }
//           if (acadFilters.Diploma.comparision === "equal") {
//             if (prev[i]["Diploma %"] !== acadFilters.Diploma.number) {
//               flag = 0;
//             }
//           }
//           if (flagApplied & flagCollege & flag) {
//             c.push(prev[i]);
//           }
//         }
//         return c;
//       }),
//     [selectedOptionsCollege, selectedOptionsApplied, acadFilters]
//   );

//   return (
//     <div
//     className="filterPane"
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "start",
//         alignItems: "center",        
//       }}
//     >
//       <div className="searchName">
//         <Input
//           style={{ marginLeft: "27px" }}
//           placeholder=" Search By Name"
//           value={props.searchedText}
//           onChange={(e) => props.setSearchedText(e.target.value)}
//           prefix={<SearchOutlined />}
//         />
//       </div>

//       <div style={{ marginLeft: "auto" }}>
//         <Space wrap>
//           <Dropdown
//             overlay={CollegeMenu}
//             onOpenChange={handleOpenCollegeFilterChange}
//             open={openCollegeFilter}
//             trigger={["click"]}
//           >
//             <Button
//               className="ant-dropdown-link"
//               type="link"
//               onClick={(e) => e.preventDefault()}
//               style={{ color: "black" }}
//             >
//               <Space>
//                 College
//                 <CaretDownOutlined className="filter-icon" />
//               </Space>
//             </Button>
//           </Dropdown>

//           <Dropdown
//             overlay={Appliedmenu}
//             onOpenChange={handleOpenAppliedFilterChange}
//             open={openAppliedFilter}
//             trigger={["click"]}
//           >
//             <Button
//               type="link"
//               className="ant-dropdown-link"
//               onClick={(e) => e.preventDefault()}
//               style={{ color: "black" }}
//             >
//               <Space>
//                 Applied For
//                 <CaretDownOutlined className="filter-icon" />
//               </Space>
//             </Button>
//           </Dropdown>

//           <Dropdown
//             overlay={AcadMenu}
//             onOpenChange={handleOpenAcadFilterChange}
//             open={openAcadFilter}
//             trigger={["click"]}
//           >
//             <Button
//               type="link"
//               className="ant-dropdown-link"
//               onClick={(e) => e.preventDefault()}
//               style={{ color: "black" }}
//             >
//               <Space>
//                 Academic %
//                 <CaretDownOutlined className="filter-icon" />
//               </Space>
//             </Button>
//           </Dropdown>

//           <Button
//             type="link"
//             icon={<RedoOutlined />}
//             onClick={resetFilter}
//             style={{ color: "black" }}
//           >
//             Reset Filter
//           </Button>
//         </Space>
//       </div>
//     </div>
//   );
// };

// export default FilterPanBar;

import React, { useState } from "react";
import {
  Input,
  Space,
  Dropdown,
  Menu,
  Checkbox,
  InputNumber,
  Button,
  Select,
} from "antd";
import { CaretDownOutlined, RedoOutlined } from "@ant-design/icons";
import { rdata, rDataType } from "../Candidate/DummyCandidateData";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

//Dinamically getting all college names from table.
function findUniqueCollege(data: rDataType[]) {
  var c: any[] = [];
  for (var i = 0; i < data.length; i++) {
    c.push(data[i].College);
  }
  c = Array.from(new Set(c));
  let d = c.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
  return d;
}

//Dinamically getting all Applied for categories from table.
function findUniqueAppliedFor(data: rDataType[]) {
  var c: any[] = [];
  for (var i = 0; i < data.length; i++) {
    c.push(data[i]["Applied for"]);
  }
  c = Array.from(new Set(c));
  let d = c.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
  return d;
}

//Interface for dropdown option
interface DropdownOption {
  label: string;
  value: string;
}

// Filter Bar layout finction
const FilterPanBar = (props: any) => {
  //getting unique college and Applied For
  const uniqueCollege = findUniqueCollege(rdata);
  const uniqueAppliedFor = findUniqueAppliedFor(rdata);

  //Intialising states for college, Applied For and Academic Filter Dropdown
  const [selectedOptionsCollege, setSelectedOptionsCollege] = useState<
    DropdownOption[]
  >([]);

  const [selectedOptionsApplied, setSelectedOptionsApplied] = useState<
    DropdownOption[]
  >([]);
  const [acadFilters, setAcadFilters] = useState({
    SSC: {
      comparision: "gte",
      number: 0,
    },
    HSC: {
      comparision: "gte",
      number: 0,
    },
    UG: {
      comparision: "gte",
      number: 0,
    },
    PG: {
      comparision: "gte",
      number: 0,
    },
    Diploma: {
      comparision: "gte",
      number: 0,
    },
  });
  
  const [tempAcadFilters, setTempAcadFilters] = useState({
    SSC: {
      comparision: "gte",
      number: 0,
    },
    HSC: {
      comparision: "gte",
      number: 0,
    },
    UG: {
      comparision: "gte",
      number: 0,
    },
    PG: {
      comparision: "gte",
      number: 0,
    },
    Diploma: {
      comparision: "gte",
      number: 0,
    },
  });
  const [openCollegeFilter, setOpenCollegeFilter] = useState(false);
  const [openAppliedFilter, setOpenAppliedFilter] = useState(false);
  const [collegeFilterSearch,setCollegeFilterSearch]=useState("");
  const [appliedFilterSearch,setAppliedFilterSearch]=useState("");
  const [openAcadFilter, setOpenAcadFilter] = useState(false);
  const resetFilter = () => {
    setSelectedOptionsCollege([]);
    setSelectedOptionsApplied([]);
    setAcadFilters({
      SSC: {
        comparision: "gte",
        number: 0,
      },
      HSC: {
        comparision: "gte",
        number: 0,
      },
      UG: {
        comparision: "gte",
        number: 0,
      },
      PG: {
        comparision: "gte",
        number: 0,
      },
      Diploma: {
        comparision: "gte",
        number: 0,
      },
    });
    setTempAcadFilters({
      SSC: {
        comparision: "gte",
        number: 0,
      },
      HSC: {
        comparision: "gte",
        number: 0,
      },
      UG: {
        comparision: "gte",
        number: 0,
      },
      PG: {
        comparision: "gte",
        number: 0,
      },
      Diploma: {
        comparision: "gte",
        number: 0,
      },
    });
  };

  const handleOptionSelectCollege = (option: DropdownOption) => {
    const isOptionSelected = selectedOptionsCollege.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isOptionSelected) {
      setSelectedOptionsCollege(
        selectedOptionsCollege.filter((o) => o.value !== option.value),
        );
    } else {
      setSelectedOptionsCollege([...selectedOptionsCollege, option]);
    }
  };

  const handleOptionSelectApplied = (option: DropdownOption) => {
    const isOptionSelected = selectedOptionsApplied.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isOptionSelected) {
      setSelectedOptionsApplied(selectedOptionsApplied.filter((o) => o.value !== option.value));
    } else {
      setSelectedOptionsApplied([...selectedOptionsApplied, option]);
    }
  };

  const CollegeMenu = (
    <Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
      <Menu.Item>
        <Input
          addonBefore={
            <>
              <SearchOutlined />
            </>
          }
          placeholder={`search`}
          onChange={(event)=>{console.log(event);setCollegeFilterSearch(event.target.value)}}
        ></Input>
      </Menu.Item>
      {uniqueCollege.filter((Option)=>Option.value.toLowerCase().includes(collegeFilterSearch.toLowerCase())).map((option) => (
        <Menu.Item key={option.value}>
          <Checkbox
            checked={selectedOptionsCollege.some(
              (o) => o.value === option.value
            )}
            onChange={() => handleOptionSelectCollege(option)}
          >
            {option.label}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const Appliedmenu = (
    <Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
      <Menu.Item>
        <Input
          addonBefore={
            <>
              <SearchOutlined />
            </>
          }
          onChange={(event)=>{console.log(event);setAppliedFilterSearch(event.target.value)}}
          placeholder={`Search`}
        ></Input>
      </Menu.Item>
      {uniqueAppliedFor.filter((Option)=>Option.label.toLowerCase().includes(appliedFilterSearch.toLowerCase())).map((option) => (
        <Menu.Item key={option.value}>
          <Checkbox
            checked={selectedOptionsApplied.some(
              (o) => o.value === option.value
            )}
            onChange={() => handleOptionSelectApplied(option)}
          >
            {option.label}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleOpenCollegeFilterChange = (flag: boolean) => {
    setOpenCollegeFilter(flag);
  };

  const handleOpenAppliedFilterChange = (flag: boolean) => {
    setOpenAppliedFilter(flag);
  };

  const handleOpenAcadFilterChange = (flag: boolean) => {
    setOpenAcadFilter(flag);
  };

  const selectSSC = (
    <Select
      value={tempAcadFilters.SSC.comparision}
      menuItemSelectedIcon
      size="small"
      defaultValue="gte"
      style={{ width: 70 }}
      onSelect={(option) => {
        setTempAcadFilters((prev) => {
          var x = { ...prev };
          x.SSC.comparision = option;
          return x;
        });
      }}
    >
      <Option value="gte">{">="}</Option>
      <Option value="lte">{"<="}</Option>
      <Option value="equal">{"="}</Option>
    </Select>
  );

  const selectHSC = (
    <Select
      value={tempAcadFilters.HSC.comparision}
      menuItemSelectedIcon
      size="small"
      defaultValue="gte"
      style={{ width: 70 }}
      onSelect={(option) => {
        setTempAcadFilters((prev) => {
          var x = { ...prev };
          x.HSC.comparision = option;
          return x;
        });
      }}
    >
      <Option value="gte">{">="}</Option>
      <Option value="lte">{"<="}</Option>
      <Option value="equal">{"="}</Option>
    </Select>
  );

  const selectUG = (
    <Select
      value={tempAcadFilters.UG.comparision}
      menuItemSelectedIcon
      size="small"
      defaultValue="gte"
      style={{ width: 70 }}
      onSelect={(option) => {
        setTempAcadFilters((prev) => {
          var x = { ...prev };
          x.UG.comparision = option;
          return x;
        });
      }}
    >
      <Option value="gte">{">="}</Option>
      <Option value="lte">{"<="}</Option>
      <Option value="equal">{"="}</Option>
    </Select>
  );

  const selectPG = (
    <Select
      value={tempAcadFilters.PG.comparision}
      menuItemSelectedIcon
      size="small"
      defaultValue="gte"
      style={{ width: 70 }}
      onSelect={(option) => {
        setTempAcadFilters((prev) => {
          var x = { ...prev };
          x.PG.comparision = option;
          return x;
        });
      }}
    >
      <Option value="gte">{">="}</Option>
      <Option value="lte">{"<="}</Option>
      <Option value="equal">{"="}</Option>
    </Select>
  );

  const selectDiploma = (
    <Select
      menuItemSelectedIcon
      size="small"
      defaultValue={tempAcadFilters.Diploma.comparision}
      style={{ width: 70 }}
      value={tempAcadFilters.Diploma.comparision}
      onSelect={(option) => {
        setTempAcadFilters((prev) => {
          var x = { ...prev };
          x.Diploma.comparision = option;
          return x;
        });
      }}
    >
      <Option value="gte">{">="}</Option>
      <Option value="lte">{"<="}</Option>
      <Option value="equal">{"="}</Option>
    </Select>
  );

  const AcadMenu = (
    <Menu selectable={false}>
      <Menu.Item key="SSC">
        SSC{" "}
        <InputNumber
          style={{ marginLeft: 29, width: 150 }}
          size="small"
          min={0}
          max={100}
          width={8}
          onChange={(number) => {
            setTempAcadFilters((prev) => {
              var x = { ...prev };
              if (number !== null) x.SSC.number = number;
              else x.SSC.number = 0;
              return x;
            });
          }}
          value={acadFilters.SSC.number}
          addonBefore={selectSSC}
          defaultValue={0}
        />
      </Menu.Item>

      <Menu.Item key="HSC">
        HSC{" "}
        <InputNumber
          style={{ marginLeft: 27, width: 150 }}
          size="small"
          min={0}
          max={100}
          width={8}
          addonBefore={selectHSC}
          value={acadFilters.HSC.number}
          onChange={(number) => {
            setTempAcadFilters((prev) => {
              var x = { ...prev };
              if (number !== null) x.HSC.number = number;
              else x.HSC.number = 0;
              return x;
            });
          }}
          defaultValue={0}
        />
      </Menu.Item>
      <Menu.Item key="UG">
        UG{" "}
        <InputNumber
          style={{ marginLeft: 34, width: 150 }}
          size="small"
          min={0}
          max={100}
          width={8}
          value={acadFilters.UG.number}
          onChange={(number) => {
            setTempAcadFilters((prev) => {
              var x = { ...prev };
              if (number !== null) x.UG.number = number;
              else x.UG.number = 0;
              return x;
            });
          }}
          addonBefore={selectUG}
          defaultValue={0}
        />
      </Menu.Item>
      <Menu.Item key="PG">
        PG{"     "}
        <InputNumber
          style={{ marginLeft: 35, width: 150 }}
          size="small"
          min={0}
          max={100}
          width={8}
          onChange={(number) => {
            setTempAcadFilters((prev) => {
              var x = { ...prev };
              if (number !== null) x.PG.number = number;
              else x.PG.number = 0;
              return x;
            });
          }}
          addonBefore={selectPG}
          defaultValue={0}
          value={acadFilters.PG.number}
        />
      </Menu.Item>
      <Menu.Item key="Diploma">
        Diploma{" "}
        <InputNumber
          size="small"
          min={0}
          max={100}
          width={8}
          value={acadFilters.Diploma.number}
          style={{ width: 150 }}
          onChange={(number) => {
            setTempAcadFilters((prev) => {
              var x = { ...prev };
              if (number !== null) x.Diploma.number = number;
              else x.Diploma.number = 0;
              return x;
            });
          }}
          addonBefore={selectDiploma}
          defaultValue={0}
        />
      </Menu.Item>
      <Menu.Item>
        <Space>
          <Button
            onClick={() =>{
              setTempAcadFilters({
                SSC: {
                  comparision: "gte",
                  number: 0,
                },
                HSC: {
                  comparision: "gte",
                  number: 0,
                },
                UG: {
                  comparision: "gte",
                  number: 0,
                },
                PG: {
                  comparision: "gte",
                  number: 0,
                },
                Diploma: {
                  comparision: "gte",
                  number: 0,
                },
              });
              setAcadFilters({
                SSC: {
                  comparision: "gte",
                  number: 0,
                },
                HSC: {
                  comparision: "gte",
                  number: 0,
                },
                UG: {
                  comparision: "gte",
                  number: 0,
                },
                PG: {
                  comparision: "gte",
                  number: 0,
                },
                Diploma: {
                  comparision: "gte",
                  number: 0,
                },
              });
            }}
            
          
          >
            Clear Filter
          </Button>
          <Button onClick={()=>setAcadFilters(tempAcadFilters)}>Apply</Button>
        </Space>
      </Menu.Item>
    </Menu>
  );

  React.useEffect(
    () =>
      props.setContent(() => {
        console.log(acadFilters);
        var prev: rDataType[] = rdata;
        var c: rDataType[] = [];
        for (var i = 0; i < prev.length; i++) {
          var flagCollege = 0;
          var flagApplied = 0;

          if (selectedOptionsCollege.length === 0) flagCollege = 1;
          for (var j = 0; j < selectedOptionsCollege.length; j++) {
            if (prev[i].College === selectedOptionsCollege[j].value) {
              flagCollege = 1;
              break;
            }
          }
          if (selectedOptionsApplied.length === 0) flagApplied = 1;
          for (j = 0; j < selectedOptionsApplied.length; j++) {
            if (prev[i]["Applied for"] === selectedOptionsApplied[j].value) {
              flagApplied = 1;
              break;
            }
          }

          var flag = 1;
          if (acadFilters.SSC.comparision === "gte") {
            if (prev[i]["SSC %"] < acadFilters.SSC.number) {
              flag = 0;
            }
          }
          if (acadFilters.SSC.comparision === "lte") {
            if (prev[i]["SSC %"] > acadFilters.SSC.number) {
              flag = 0;
            }
          }
          if (acadFilters.SSC.comparision === "equal") {
            if (prev[i]["SSC %"] !== acadFilters.SSC.number) {
              flag = 0;
            }
          }
          if (acadFilters.HSC.comparision === "gte") {
            if (prev[i]["HSC %"] < acadFilters.HSC.number) {
              flag = 0;
            }
          }
          if (acadFilters.HSC.comparision === "lte") {
            if (prev[i]["HSC %"] > acadFilters.HSC.number) {
              flag = 0;
            }
          }
          if (acadFilters.HSC.comparision === "equal") {
            if (prev[i]["HSC %"] !== acadFilters.HSC.number) {
              flag = 0;
            }
          }
          if (acadFilters.UG.comparision === "gte") {
            if (prev[i]["UG %"] < acadFilters.UG.number) {
              flag = 0;
            }
          }
          if (acadFilters.UG.comparision === "lte") {
            if (prev[i]["UG %"] > acadFilters.UG.number) {
              flag = 0;
            }
          }
          if (acadFilters.UG.comparision === "equal") {
            if (prev[i]["UG %"] !== acadFilters.UG.number) {
              flag = 0;
            }
          }

          if (acadFilters.PG.comparision === "gte") {
            if (prev[i]["PG %"] < acadFilters.PG.number) {
              flag = 0;
            }
          }
          if (acadFilters.PG.comparision === "lte") {
            if (prev[i]["PG %"] > acadFilters.PG.number) {
              flag = 0;
            }
          }
          if (acadFilters.PG.comparision === "equal") {
            if (prev[i]["PG %"] !== acadFilters.PG.number) {
              flag = 0;
            }
          }
          if (acadFilters.Diploma.comparision === "gte") {
            if (prev[i]["Diploma %"] < acadFilters.Diploma.number) {
              flag = 0;
            }
          }
          if (acadFilters.Diploma.comparision === "lte") {
            if (prev[i]["Diploma %"] > acadFilters.Diploma.number) {
              flag = 0;
            }
          }
          if (acadFilters.Diploma.comparision === "equal") {
            if (prev[i]["Diploma %"] !== acadFilters.Diploma.number) {
              flag = 0;
            }
          }
          if (flagApplied & flagCollege & flag) {
            c.push(prev[i]);
          }
        }
        return c;
      }),
    [selectedOptionsCollege, selectedOptionsApplied, acadFilters]
  );

  return (
    <div
      className="filterPane"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <div className="searchName">
        <Input
          style={{ marginLeft: "27px" }}
          placeholder=" Search By Name"
          value={props.searchedText}
          onChange={(e) => props.setSearchedText(e.target.value)}
          prefix={<SearchOutlined />}
        />
      </div>

      <div style={{ marginLeft: "auto" }}>
        <Space wrap>
          <Dropdown
            overlay={CollegeMenu}
            onOpenChange={handleOpenCollegeFilterChange}
            open={openCollegeFilter}
            trigger={["click"]}
          >
            <Button
              className="ant-dropdown-link"
              type="link"
              onClick={(e) => e.preventDefault()}
              style={{ color: "black" }}
            >
              <Space>
                College
                <CaretDownOutlined className="filter-icon" />
              </Space>
            </Button>
          </Dropdown>

          <Dropdown
            overlay={Appliedmenu}
            onOpenChange={handleOpenAppliedFilterChange}
            open={openAppliedFilter}
            trigger={["click"]}
          >
            <Button
              type="link"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ color: "black" }}
            >
              <Space>
                Applied For
                <CaretDownOutlined className="filter-icon" />
              </Space>
            </Button>
          </Dropdown>

          <Dropdown
            overlay={AcadMenu}
            onOpenChange={handleOpenAcadFilterChange}
            open={openAcadFilter}
            trigger={["click"]}
          >
            <Button
              type="link"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ color: "black" }}
            >
              <Space>
                Academic %
                <CaretDownOutlined className="filter-icon" />
              </Space>
            </Button>
          </Dropdown>

          <Button
            type="link"
            icon={<RedoOutlined />}
            onClick={resetFilter}
            style={{ color: "black" }}
          >
            Reset Filter
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default FilterPanBar;
