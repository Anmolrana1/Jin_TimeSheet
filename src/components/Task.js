import React, { useEffect, useState } from 'react';
import '../style/Task.css';
import Buttons from './Buttons';
import SumData from './SumData';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Task({ setdata }) {
  const [days, setDays] = useState([{ id: 0, mon: 0, tue: 0, wed: 0, thr: 0, fri: 0, sat: 0, sun: 0 }]);
  const [daysValue, setDaysValue] = useState({ mon: 0, tue: 0, wed: 0, thr: 0, fri: 0, sat: 0, sun: 0 });
  const [weakTotal, setWeakTotal] = useState([{ id: 0, total: 0 }]);
  const [Total, setTotal] = useState(0);

  // handle days value
  function handlemon(e, itemId, day) {
    const value = e.target.value;
    setDays((prevItems) => {
      const updatedDays = [...prevItems];
      const existingItem = updatedDays.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem[day] = parseInt(value) || 0;
      } else {
        const newItem = { id: itemId, [day]: parseInt(value) || 0 };
        updatedDays.push(newItem);
      }

      return updatedDays;
    });
  }

  useEffect(() => {
    setdata(Total);
  }, [Total, setdata]);

  useEffect(() => {
    const newDayValue = {};
    const newWeakTotal = [];

    days.forEach((item) => {
      let total = 0;
      for (const day in item) {
        if (day !== 'id') {
          newDayValue[day] = (newDayValue[day] || 0) + (parseInt(item[day]) || 0);
          total = total + (parseInt(item[day]) || 0);
        }
      }
      newWeakTotal.push({ id: item.id, total: total });
    });

    let sum = 0;
    newWeakTotal.forEach((item) => {
      if (item.id !== 'id') {
        sum = sum + item.total;
      }
    });

    setWeakTotal(newWeakTotal);
    setDaysValue(newDayValue);
    setTotal(sum);
  }, [days]);

  const [contentItems, setContentItems] = useState([{ id: 1 }]);
  const [len, setlen] = useState(contentItems.length);

  useEffect(() => {
    setlen(contentItems.length);
  }, [contentItems.length]);

  const handleAddContentItem = () => {
    setContentItems((prevItems) => [...prevItems, { id: prevItems.length + 1 }]);
  };

  const handleRemoveContentItem = (itemId) => {
    setContentItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const [salesActivity, setsalesActivity] = useState([{ id: 'a1' }]);
  const [leng, setleng] = useState(salesActivity.length);

  useEffect(() => {
    setleng(salesActivity.length);
  }, [salesActivity.length]);

  const handlesalesActivity = () => {
    setsalesActivity((prevItems) => [...prevItems, { id: 'a' + (prevItems.length + 1) }]);
  };

  const handleRemovesalesActivity = (itemId) => {
    setsalesActivity((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      {/* BAU Activity */}
      <div className='content_items'>
        <div className='tag'>BAU Activity</div>
        <div style={{ width: '100%' }}>
          {contentItems.map((item) => (
            <div className='project_info' key={item.id}>
              <br />
              <div className='tag1'>
                <select>
                  <option>BAU_002 People</option>
                  <option>BAU_003 Delivery</option>
                  <option>BAU_004 Sales</option>
                </select>
              </div>
              <div className='tag1'>
                <select>
                  <option>Employee Wellbeing</option>
                  <option>Human Resources</option>
                  <option>IDE</option>
                </select>
              </div>
              <div className='tag1'>
                <input type='text' />
              </div>
              {["mon", "tue", "wed", "thr", "fri", "sat", "sun"].map((day) => (
                <div key={day} className='days'>
                  <input type='text' maxLength='1' onChange={(e) => handlemon(e, item.id, day)} />
                </div>
              ))}
              <div className='days'>{weakTotal.find((totalItem) => totalItem.id === item.id)?.total || 0}</div>
              <div className='content_button'>
                <div className='content_button_type' onClick={handleAddContentItem}>
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px' }} />
                </div>
                {len > 1 ? (
                  <div className='content_button_type' onClick={() => handleRemoveContentItem(item.id)}>
                    <FontAwesomeIcon icon={faMinus} style={{ fontSize: '20px' }} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Activity */}
      <div className='content_items'>
        <div className='tag'>Sales Activity</div>
        <div style={{ width: '100%' }}>
          {salesActivity.map((item) => (
            <div className='project_info' key={item.id}>
              <br />
              <div className='tag1'>
                <select>
                  <option>BAU_002 People</option>
                  <option>BAU_003 Delivery</option>
                  <option>BAU_004 Sales</option>
                </select>
              </div>
              <div className='tag1'>
                <select>
                  <option>Employee Wellbeing</option>
                  <option>Human Resources</option>
                  <option>IDE</option>
                </select>
              </div>
              <div className='tag1'>
                <input type='text' />
              </div>
              {["mon", "tue", "wed", "thr", "fri", "sat", "sun"].map((day) => (
                <div key={day} className='days'>
                  <input type='text' maxLength='1' onChange={(e) => handlemon(e, item.id, day)} />
                </div>
              ))}
              <div className='days'>{weakTotal.find((totalItem) => totalItem.id === item.id)?.total || 0}</div>
              <div className='content_button'>
                <div className='content_button_type' onClick={handlesalesActivity}>
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px' }} />
                </div>
                {leng > 1 ? (
                  <div className='content_button_type' onClick={() => handleRemovesalesActivity(item.id)}>
                    <FontAwesomeIcon icon={faMinus} style={{ fontSize: '20px' }} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Hours */}
     <SumData daysValue={daysValue} Total={Total}/>
      <Buttons />
    </>
  );
}

export default Task;
