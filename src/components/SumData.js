import React from 'react'

function SumData({daysValue,Total}) {
  return (
    <>
         <div className='content_items' style={{ padding: '3px' }}>
        <div className='tag'>Total Hours</div>
        <div style={{ width: '100%' }}>
          <div className='project_info'>
            <br />
            <div className='tag1'></div>
            <div className='tag1'></div>
            <div className='tag1'></div>
            <div className='days'>{daysValue.mon}</div>
            <div className='days'>{daysValue.tue}</div>
            <div className='days'>{daysValue.wed}</div>
            <div className='days'>{daysValue.thr}</div>
            <div className='days'>{daysValue.fri}</div>
            <div className='days'>{daysValue.sat}</div>
            <div className='days'>{daysValue.sun}</div>
            <div className='days'>{Total}</div>
            <div className='content_button'>
              <div className='content_button_type'></div>
              <div className='content_button_type'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Machine Hours */}
      <div className='content_items' style={{ padding: '3px' }}>
        <div className='tag'>Machine Hours</div>
        <div style={{ width: '100%' }}>
          <div className='project_info'>
            <br />
            <div className='tag1'></div>
            <div className='tag1'></div>
            <div className='tag1'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='content_button'>
              <div className='content_button_type'></div>
              <div className='content_button_type'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Break Hours */}
      <div className='content_items' style={{ padding: '3px' }}>
        <div className='tag'>Break Hours</div>
        <div style={{ width: '100%' }}>
          <div className='project_info'>
            <br />
            <div className='tag1'></div>
            <div className='tag1'></div>
            <div className='tag1'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='days'></div>
            <div className='content_button'>
              <div className='content_button_type'></div>
              <div className='content_button_type'></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SumData