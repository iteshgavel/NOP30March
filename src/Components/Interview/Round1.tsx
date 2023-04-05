import React from 'react';
import { Button } from 'antd';
import {
  SaveOutlined,
  CheckOutlined
} from '@ant-design/icons';
import '../Interview/Round1.css';

function Round1() {
  return (
    <>
      <div className='round1-top'>


        <div className="arrowActive">
          <p>Technical Skills</p>
        </div>


        <div className="arrow">
          <p>Analytic Skills</p>
        </div>



        <div className="arrow">
          <p>Project Involvement</p>
        </div>



        <div className="arrow">
          <p>Overall Feedback</p>
        </div>
      </div>
      <div className='programmingConcept'>Programming Concepts</div>
      <div className='concept'>Recursion
        <div className='comment'>Comments</div>
      </div>
      <div className='concept'>Error Handling
        <div className='comment'>Comments</div>
      </div>
      <div className='concept'>Boundary Conditions
        <div className='comment'>Comments</div>
      </div>
      <div className='feedback'>Give Your Feedback</div>

      <Button className='save-btn'><SaveOutlined />Save</Button>
      <Button className='save-next-btn'><CheckOutlined />Save and Next</Button>



    </>
  )
}

export default Round1