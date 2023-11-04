import React from "react";
import fawindowclose from "../assets/rectangle-xmark-regular.svg";

const EventTooltip = ({ event, onClose }) => {
  return (
    <div className="event-tooltip">
      <button className="close-button" onClick={onClose}>
        <img src={fawindowclose} alt="Close" />
      </button>
      <h3>{event.title}</h3>
      <p>{event.location}</p>
    </div>
  );
};

export default EventTooltip;
