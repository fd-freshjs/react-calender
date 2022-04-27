import React, { Component } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import "./Calendar.css";

class Calendar extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      today: new Date(),
    }
  }

  render() {
    const { today } = this.state;

    return <div className="calendar">
      <LeftSide date={today} />
      <RightSide date={today} />
    </div>;
  }
}

export default Calendar;
