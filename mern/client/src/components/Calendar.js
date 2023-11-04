// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./Calendar.css"
// import react from 'react';
// import { ReactDOM } from "react";
// import { useRef } from "react";
// import { useState } from "react";
// import fawindowclose from "../assets/rectangle-xmark-regular.svg"
// const localizer = momentLocalizer(moment);
  
// const toolTips = () => {
    
// }
// class CourseCalendar extends Component {
//   state = {
//     events: [
//       {
//         start: moment('2023-11-10T10:00:00').toDate(),
//         end: moment('2023-11-10T12:00:00').toDate(),
//         title: "CML Barnett - Computer Basics",
//         location: "3434 E Livingston Ave, Columbus, OH 43227"
//       },
//       {
//         start: moment('2023-11-06T10:00:00').toDate(),
//         end: moment('2023-11-06T12:30:00').toDate(),
//         title: "Gahanna Branch",
//         location: "310 Hamilton Rd, Gahanna, OH 43230"
//       },

//     ]
//   };

//   render() {
//     return (
//       <div className="CourseCalendar">
//         <h5>Course Calendar</h5>
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

// export default CourseCalendar;

import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import EventTooltip from "./EventTooltip"; // Import the custom tooltip component

const localizer = momentLocalizer(moment);

class CourseCalendar extends Component {
    state = {
            events: [
              {
                start: moment('2023-11-10T10:00:00').toDate(),
                end: moment('2023-11-10T12:00:00').toDate(),
                title: "CML Barnett - Computer Basics",
                location: "3434 E Livingston Ave, Columbus, OH 43227", 
                mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7573157000857!2d-82.90696532409918!3d39.94681778410603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883862a052b4ca79%3A0x111cb4f1293b00b8!2s3434%20E%20Livingston%20Ave%2C%20Columbus%2C%20OH%2043227!5e0!3m2!1sen!2sus!4v1699085813578!5m2!1sen!2sus"
              },
              {
                start: moment('2023-11-06T10:00:00').toDate(),
                end: moment('2023-11-06T12:30:00').toDate(),
                title: "Gahanna Branch",
                location: "310 Hamilton Rd, Gahanna, OH 43230",
                mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.90519979295!2d-82.86914362409635!3d40.01056508026007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838618105caa20d%3A0x514e351eed81d3a2!2s310%20S%20Hamilton%20Rd%2C%20Gahanna%2C%20OH%2043230!5e0!3m2!1sen!2sus!4v1699086260931!5m2!1sen!2sus"
              },
        
            ],
    showTooltip: false,
    // tooltipPosition: { top: 0, left: 0 },
    selectedEvent: null,
  };

  handleEventClick = (event, e) => {
    // Calculate the position of the tooltip
    const position = {
      top: e.clientY,
      left: e.clientX,
    };

    this.setState({
      showTooltip: true,
      tooltipPosition: position,
      selectedEvent: event,
    });
  };

  handleCloseTooltip = () => {
    this.setState({
      showTooltip: false,
      selectedEvent: null,
    });
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
          onSelectEvent={this.handleEventClick}
        />

        {this.state.showTooltip && (
          <EventTooltip
            event={this.state.selectedEvent}
            onClose={this.handleCloseTooltip}
            style={{
              top: this.state.tooltipPosition.top,
              left: this.state.tooltipPosition.left,
            }}
          />
        )}
      </div>
    );
  }
}

export default CourseCalendar;
