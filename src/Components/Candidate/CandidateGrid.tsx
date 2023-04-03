import React from "react";
import { Divider, Space, Table, Button, Upload, Modal } from "antd";
import { CSVLink } from "react-csv";
import csvtojson from "csvtojson";
import { rdata, rDataType } from "./DummyCandidateData";
import { Link } from "react-router-dom";

import { setDisplay } from "../../store/Slicers/ShowSlicer";
import {
  PlusOutlined,
  FilterFilled,
  DeleteFilled,
  CalendarFilled,
  FileExcelFilled,
  ReloadOutlined,
} from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import ScheduleModal from "./ScheduleModal";
import DeleteCandidateModal from "./DeleteCandidateModal";
import NewCandidateDetail from "./AddNewCandidate/NewCandidateDetail";
import FilterPaneBar from "../FilterPane/FilterPane";
import { useDispatch } from "react-redux";
import "./CandidateGrid.css";
//defining datatype of the data
const RefreshPage = () => {
  window.location.reload();
};

function CandidateGrid() {
  const [content, setContent] = React.useState(rdata);
  const [selectedRows, setSelectedRows]: any = React.useState([]);

  //By default disabling 'delete' and 'Schedule' button if no rows are selected
  const [buttonStatus, setButtonStatus] = React.useState(true);
  const rowSelection = {
    //logging the selected data
    onChange: (selectedRowKeys: React.Key[], selectedRows: rDataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setSelectedRows(selectedRows);
      let condition;
      if (selectedRows.length === 0) {
        condition = true;
      } else {
        condition = false;
      }
      setButtonStatus(condition);
    },
  };

  const [open, setOpen] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const showDeleteModal = () => {
    setOpenDeleteModal(true);
    console.log(openDeleteModal);
  };

  //Show Add Single Candidate Modal
  const [isAddCandidateModalOpen, setIsAddCandidateModalOpen] =
    React.useState(false);

  const addCandidateShowModal = () => {
    setIsAddCandidateModalOpen(true);
  };

  const addCandidateHandleOk = () => {
    setIsAddCandidateModalOpen(false);
  };

  const addCandidateHandleCancel = () => {
    setIsAddCandidateModalOpen(false);
  };

  const dispatch = useDispatch();
  const columns: ColumnsType<rDataType> = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
      key: "Name",
      fixed: "left",
      onCell: (record: any) => {
        return {
          onClick: () => {
            dispatch(setDisplay({ candidate: record }));

            console.log(record);
          },
        };
      },
      render: (text: any) => <Link to="/candidate/name">{text}</Link>,
      onFilter: (value: any, record: rDataType) => {
        return String(record.Name).toLowerCase().includes(value.toLowerCase());
      },
    },

    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
      width: 150,
      fixed: "left",
    },
    {
      title: "SSC CGPA",
      dataIndex: "SSC CGPA",
      key: "SSC CGPA",
      width: 150,
    },
    {
      title: "SSC%",
      dataIndex: "SSC %",
      key: "SSC%",
      width: 150,
    },
    {
      title: "HSC CGPA",
      dataIndex: "HSC CGPA",
      key: "HSC CGPA",
      width: 150,
    },
    {
      title: "HSC %",
      dataIndex: "HSC %",
      key: "HSC %",
      width: 150,
    },
    {
      title: "Diploma Branch",
      dataIndex: "Diploma Branch",
      key: "Diploma Branch",
      width: 150,
    },
    {
      title: "Diploma CGPA",
      dataIndex: "Diploma CGPA",
      key: "Diploma CGPA",
      width: 150,
    },
    {
      title: "Diploma %",
      dataIndex: "Diploma %",
      key: "Diploma %",
      width: 150,
    },
    {
      title: "Reg",
      dataIndex: "RollNo",
      key: "Reg",
      width: 150,
    },
    {
      title: "UG Course",
      dataIndex: "UG Course",
      key: "UG Course",
      width: 150,
    },
    {
      title: "UG Branch",
      dataIndex: "UG Branch",
      key: "UG Branch",
      width: 150,
    },
    {
      title: "UG CGPA",
      dataIndex: "UG CGPA",
      key: "UG CGPA",
      width: 150,
    },
    {
      title: "UG %",
      dataIndex: "UG %",
      key: "UG %",
      width: 150,
    },
    {
      title: "PG Course",
      dataIndex: "PG Course",
      key: "PG Course",
      width: 150,
    },
    {
      title: "PG Branch",
      dataIndex: "PG Branch",
      key: "PG Branch",
      width: 150,
    },
    {
      title: "PG CGPA",
      dataIndex: "PG CGPA",
      key: "PG CGPA",
      width: 150,
    },
    {
      title: "PG %",
      dataIndex: "PG %",
      key: "PG %",
      width: 150,
    },
    {
      title: "Applied For",
      dataIndex: "Applied for",
      key: "Applied For",
      width: 150,
    },
    {
      title: "College",
      dataIndex: "College",
      key: "College",
      width: 150,
    },
    {
      title: "Backlog",
      dataIndex: "Backlog",
      key: "Backlog",
      width: 150,
    },
    {
      title: "Rank",
      dataIndex: "Rank",
      key: "Rank",
      width: 150,
    },
  ];

  const [filter, setFilter] = React.useState(false);

  const filterPane = filter ? (
    <>
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      <FilterPaneBar
        setContent={setContent}
      />
    </>
  ) : (
    <></>
  );
  const csvToJson = (csvData: any) => {
    csvtojson()
      .fromString(csvData)
      .then((json: any) => {
        console.log(json); // You can use the converted JSON data here
        const jsonString = JSON.stringify(json);
        console.log(jsonString);
        setContent((prev) => {
          let c = [...prev];
          for (var i = 0; i < json.length; i++) {
            c.push(json[i]);
          }
          return c;
        });
      });
  };
  return (
    <>
      <Space
        wrap
        style={{
          marginTop: 10,
          marginLeft: "20px",
          justifyContent: "right",
        }}
      >
        <CSVLink filename={"Data.csv"} data={rdata}>
          <Button
            icon={<FileExcelFilled style={{ color: "green" }} />}
            className="button"
            title="Export"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            Export
          </Button>
        </CSVLink>

        <Button
          icon={<DeleteFilled style={{ color: "red" }} />}
          className="button"
          disabled={buttonStatus}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
          onClick={showDeleteModal}
          title="Delete"
        >
          Delete
        </Button>
        <DeleteCandidateModal
          setContent={setContent}
          selectedRow={selectedRows}
          visible={openDeleteModal}
          setOpen={setOpenDeleteModal}
        />
        <Button
          icon={<CalendarFilled style={{ color: "orange" }} />}
          className="button"
          onClick={showModal}
          disabled={buttonStatus}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
          title="Schedule"
        >
          Schedule
        </Button>
        <ScheduleModal visible={open} setOpen={setOpen} />

        <Button
          icon={<FilterFilled />}
          onClick={() => setFilter(!filter)}
          className="button"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
          title="Filter"
        >
          Filter
        </Button>
        <Button
          icon={<ReloadOutlined />}
          onClick={RefreshPage}
          className="button"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          }}
          title="refresh"
        >
          Refresh
        </Button>
        <Button icon={<PlusOutlined />} onClick={addCandidateShowModal}>
          Add Candidate
        </Button>

        <Modal
          title="Add Candidate Detail"
          open={isAddCandidateModalOpen}
          onOk={addCandidateHandleOk}
          onCancel={addCandidateHandleCancel}
          style={{ top: 10 }}
          footer={null}
          width={700}
        >
          <Divider />
          <NewCandidateDetail modalOnOk={() => addCandidateHandleOk()} />
        </Modal>

        <Upload
          accept=".csv"
          showUploadList={false}
          beforeUpload={(file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              csvToJson(e.target?.result);
            };
            reader.readAsText(file);
            // Prevent upload
            return false;
          }}
        >
          <Button icon={<PlusOutlined />}>Bulk Upload</Button>
        </Upload>
      </Space>
      <div className="filterPane">{filterPane}</div>
      <Divider style={{ marginTop: 10, marginBottom: 10, width: "100%" }} />
      <div className="candidate-table">
        <Table
          scroll={{ x: true }}
          pagination={{
            pageSize: 10,
            position: ["bottomRight"],
          }}
          columns={columns}
          dataSource={content}
          rowSelection={{
            ...rowSelection,
            fixed: "left",
            columnWidth: 100,
          }}
        />
      </div>
    </>
  );
}

export default CandidateGrid;
