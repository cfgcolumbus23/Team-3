import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
function Calender() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div>
        <Calendar
            onChange={date => setDate(date)}
            value={date}
            tileContent={({ date, view }) => (
                <div className="custom-date-style">
                {date.getDate()}
                </div>
            )}
            />
      </div>
    );
  }
  export default Calender;