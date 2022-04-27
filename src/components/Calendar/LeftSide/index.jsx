import React from 'react'

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function LeftSide(props) {
  const { date } = props;
  const dayOfWeek = date.getDay();
  const dayName = dayNames[dayOfWeek]

  return (
    <div className="calendar-side">
        <h5>{dayName}</h5>
        <h4>{date.getDate()}</h4>
    </div>
  )
}

export default LeftSide;