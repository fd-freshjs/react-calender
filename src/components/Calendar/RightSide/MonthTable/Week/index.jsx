import React from 'react';
import Day from './Day';
import './Week.css';

function Week(props) {
  console.log(props);

  return (
    <div className="row">
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  );
}

export default Week