import React from "react";
import { getDaysInMonth, getDay, format } from 'date-fns';
// import * as dateFns from 'date-fns';
import DaysHeader from "./DaysHeader";
import Week from './Week';
import './MonthTable.css';

function MonthTable(props) {

  const daysInMonth = getDaysInMonth(props.date);
  const weeksInMonth = Math.ceil(daysInMonth / 7);
  const firstDayDate = new Date(format(props.date, 'yyyy-MM-01'));
  const monthDayStart = getDay(firstDayDate);

  const daysArray = [];
  for (let date = 1; date <= daysInMonth + monthDayStart; date++) {
    if (date < monthDayStart + 1) {
      daysArray.push('');
      continue;
    }
    daysArray.push(date - monthDayStart);
  }

  const weekArray = [];
  for(let week = 0; week < weeksInMonth; week++) {
    const index = week * 7;
    const weekDates = daysArray.slice(index, index + 7);
    weekArray.push(<Week key={week} datesArray={weekDates} />);
  }

  return (
    <div>
      <DaysHeader />
      {weekArray}
    </div>
  );
}

export default MonthTable;
