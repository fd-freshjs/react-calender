
import React from 'react'
import MonthTable from './MonthTable';

function RightSide(props) {
  return (
    <div className="calendar-side">
      <h5>julu 2020</h5>
      <MonthTable date={props.date} />
    </div>
  )
}

export default RightSide;
