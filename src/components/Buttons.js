import React from 'react'
import '../style/Buttons.css'
import { FaArrowRightLong } from "react-icons/fa6";
function Buttons() {
  return (
    <div className='buttons'>
      <button className='b1'>Save</button>
      <button className='b1'>Submit<FaArrowRightLong className='arrow' style={{marginLeft:"8px",marginTop:"2px"}}/></button>
    </div>
  )
}

export default Buttons