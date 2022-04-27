import React from "react";
import DaysHeader from "./DaysHeader";
import Week from './Week';
import './MonthTable.css';

function MonthTable(props) {

  const weekArray = [];
  for(let i = 0; i < 5; i++) {
    weekArray.push(<Week key={i} />);

    /* weekArray.push(
      <div>
        <span>

        </span>
      </div>
    ) */;
  }

  return (
    <div>
      <DaysHeader />
      {weekArray}
    </div>
  );
}

export default MonthTable;
