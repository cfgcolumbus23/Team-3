import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import EventTooltip from "./EventTooltip"; // Import the EventTooltip component

const CourseCalendar = () => {
  const [events, setEvents] = useState([]);
  const [tooltipEvent, setTooltipEvent] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const localizer = momentLocalizer(moment);
  const handleEventClick = (event, e) => {
    const position = {
      top: e.clientY - 10,
      left: e.clientX - 10,
    };

    setTooltipEvent(event);
    setShowTooltip(true);
    setTooltipPosition(position);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events/getEvents");
        const data = await response.json();

        // Filter and manipulate the fetched events
        const filteredEvents = data.map((event) => {
          // Parse the date and createdAt strings to moment objects
          const startDate = moment(event.date);
          const endDate = moment(event.date).add(1, "hour"); // Default end date: 1 hour after start time

          return {
            start: startDate.toDate(),
            end: endDate.toDate(),
            title: event.title,
            location: event.location,
            // You can include other properties from the event object if needed
          };
        });

        setEvents(filteredEvents); // Update state with filtered and manipulated events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents(); // Fetch events when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="CourseCalendar">
      <h5>Course Calendar</h5>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        onSelectEvent={handleEventClick}
        tooltipAccessor={() => (
          showTooltip && (
            <EventTooltip
              event={tooltipEvent}
              onClose={handleCloseTooltip}
              style={{
                top: tooltipPosition.top,
                left: tooltipPosition.left,
              }}
            />
          )
        )}
      />
    </div>
  );
};

export default CourseCalendar;
