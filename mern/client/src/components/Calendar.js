import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css"
import react from 'react';
import { ReactDOM } from "react";
import { useRef } from "react";
import { useState } from "react";
import fawindowclose from "../assets/rectangle-xmark-regular.svg"
const localizer = momentLocalizer(moment);
  
const toolTips = () => {
    
}
class CourseCalendar extends Component {
  state = {
    events: [
      {
        start: moment('2023-11-10T10:00:00').toDate(),
        end: moment('2023-11-10T12:00:00').toDate(),
        title: "CML Barnett - Computer Basics",
        location: "3434 E Livingston Ave, Columbus, OH 43227"
      },
      {
        start: moment('2023-11-06T10:00:00').toDate(),
        end: moment('2023-11-06T12:30:00').toDate(),
        title: "Gahanna Branch",
        location: "310 Hamilton Rd, Gahanna, OH 43230"
      },

    ]
  };

  render() {
    return (
      <div className="CourseCalendar">
        <h5>Course Calendar</h5>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CourseCalendar;