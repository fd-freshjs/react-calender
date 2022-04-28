import React from 'react';
import Day from './Day';
import './Week.css';

function Week(props) {
  return (
    <div className="row">
      {props.datesArray.map(n => <Day number={n} date />)}
    </div>
  );
}

export default Week