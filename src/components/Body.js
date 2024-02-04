import React, { useState } from 'react';
import '../style/Body.css'
import Task from './Task';
export default function Body() {
  const [total,setTotal]=useState(0);
  function setdata(data){
    setTotal(data);
  }
  return (
    <div className='content_container'>
      <div className="heading"><b>Timesheet</b></div>
      <div className="heading1" id='display_total'>
        <div>Total Hours : {total}.0</div>
        <div style={{color:"hsl(340, 7%, 50%)"}}> &lt;  06 Feb 2024 - 11 Feb 2024  &gt;</div>
      </div>
      <div className="heading1">Allocation Extension</div>
      <div className='content' style={{ marginTop:"10px"}}>
          <div className="heading1"><b>Timesheet</b></div>
          <div className='content_items'style={{backgroundColor:"#FFE5EE",color:"black"}}>
            <div className='tag'>Project Type</div>
            <div style={{width:"100%"}}>
              <div className='project_info' style={{color:"rgb(1, 1, 35)",fontWeight:"bold"}} > <br/>
                <div className='tag1'>Project Name</div>
                <div className='tag1'>Task</div>
                <div className='tag1'>Comment</div>
                <div className='days'>Mon</div>
                <div className='days'>Tue</div>
                <div className='days'>Wed</div>
                <div className='days'>Thu</div>
                <div className='days'>Fri</div>
                <div className='days'>Sat</div>
                <div className='days'>Sun</div>
                <div className='days'>Total</div>
                <div className='content_button'>
                  <div className='content_button_type'> </div>
                  <div className='content_button_type'></div>
                </div>
              </div>
        </div>
        </div>
          <Task setdata={setdata}></Task>
      </div>
      
    </div>
  );
}
