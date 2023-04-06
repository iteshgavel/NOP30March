import { Modal } from 'antd';
import React from 'react'
import { Form, Select, DatePicker, TimePicker, Button } from 'antd';
import { rDataType } from './DummyCandidateData';


function DeleteCandidateModal(props:any){
  const onOk=()=>{
    props.setContent((prev:rDataType[])=>{
      let newContent:rDataType[]=[]
      for(let row=0;row<prev.length;row++)
      { 
        let flag=1
        for(let selectedRow=0;selectedRow<props.selectedRow.length;selectedRow++)
        {
            if(prev[row].key ===props.selectedRow[selectedRow].key)
            {
                flag=0
            }
              
        }
        if(flag)
        {
            newContent.push(prev[row])
        }
      }
      console.log(newContent)
      return newContent
    })
    props.setOpen(false)
  }
  return (
    <>
     <Modal
     centered
        closable={false}
        open={props.visible}
        onOk={onOk}
        onCancel={() =>props.setOpen(false)}
        width={350}
      >
        Are you sure want to delete candidate?
      </Modal>
    </>
  );
};

export default DeleteCandidateModal;