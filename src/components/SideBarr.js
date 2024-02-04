import React from 'react'
import '../style/SideBar.css'
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SideBarr() {
  return (
    <div>
      <div class="wrapper">
       
        <nav id="sidebar" >
            <div style={{height:"10%"}}>
                <div className='SideBar_items' style={{display:"flex", justifyContent:"start"}}>
                    <img src="https://partner.imanage.com/assets/uploads/company_logo/Mitratech.png" alt="not" className="logo"></img>
                </div>
            </div>
            <div style={{height:"90%"}}>
                <div className='SideBar_items'>Dashboard</div>
                <div className='SideBar_items'>Timesheet</div>
                <div className='SideBar_items'>Leave</div>
                <div className='SideBar_items'>Work From Home</div>
                <div className='SideBar_items'>Feedback</div>
                <div className='SideBar_items'>Survey</div>
                <div className='SideBar_items'>Service Desk</div>
                <div className='SideBar_items'>Forms</div>
                <div className='SideBar_items'>Travel</div>
                <div className='SideBar_items'>Expenses</div>
                <div className='SideBar_items'>Resourcing</div>
            </div>
             <div  className="user">
            <div className='user_items'>Anmol</div>
            <div className='user_items'><FontAwesomeIcon icon={faSignOut} style={{ fontSize: "20px" }} /></div>
        </div>
        </nav>
       
    </div>
    </div>
  )
}
