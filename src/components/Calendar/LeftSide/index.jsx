import React from 'react';
import { format } from 'date-fns';

function LeftSide(props) {
  const { date } = props;

  return (
    <div className="calendar-side">
        <h5>{format(date, 'EEEE')}</h5>
        <h4>{date.getDate()}</h4>
    </div>
  )
}

export default LeftSide;