import React, { useState } from "react";
import Calendar from "react-calendar";

function Calender() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div>
        <Calendar
          onChange={date => setDate(date)}
          value={date}
        />
      </div>
    );
  }
  