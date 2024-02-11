import React from 'react'
import '../style/Buttons.css'
import { FaArrowRightLong } from "react-icons/fa6";
function Buttons({days}) {
  
  const handleget=async()=>{
    try{
      const response=await fetch("http://localhost:3001/api/getdata",{
        method:"get"
      });
    
      if (response.ok) {
        // Extract JSON data from response body
        const data = await response.json();
        console.log("Data:", data);
      } else {
        console.error("Error retrieving data:", response.statusText);
      }

    }catch(error){
      console.log(" get data:",error);
    }
  }
  const handleSaveData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(days),
      });

      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };
  
  return (
    <div className='buttons'>
      <button className='b1'onClick={handleget}>Save</button>
      <button className='b1' onClick={handleSaveData}>Submit<FaArrowRightLong className='arrow' style={{marginLeft:"8px",marginTop:"2px"}}/></button>
    </div>
  )
}

export default Buttons