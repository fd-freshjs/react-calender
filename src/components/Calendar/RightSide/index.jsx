
import React from 'react';
import { format } from 'date-fns';
import MonthTable from './MonthTable';

function RightSide(props) {
  return (
    <div className="calendar-side">
      <h5>{format(props.date, 'MMMM')} {props.date.getFullYear()}</h5>
      <MonthTable date={props.date} />
    </div>
  )
}

export default RightSide;
