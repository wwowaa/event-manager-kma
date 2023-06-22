import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

import s from "../styles/add_event_dialog.module.css";

export const Modal = ({
  openModal,
  setOpenModal,
  handleAddEvent,
  startDate,
  endDate,
}) => {
  const [eventAdded, setEventAdded] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: startDate,
    end: endDate,
  });

  const addEvent = () => {
    handleAddEvent(newEvent);
    setEventAdded(true);

    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };

  return (
    <div className={`${s["dialog"]}`}>
      {!eventAdded && (
        <div className={`${s["main-container"]}`}>
          <div className={`${s["modal-container"]}`}>
            <div className={s.newEvent}>
              <h2>Add New Event</h2>
              <form>
                <input
                  type="text"
                  placeholder="Add Title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  required
                />
                <DatePicker
                  placeholderText="Start Date"
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({ ...newEvent, start })}
                  required
                />
                <DatePicker
                  placeholderText="End Date"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({ ...newEvent, end })}
                  required
                />

                <button
                  onClick={() => {
                    console.log("submitted");
                    addEvent();
                  }}
                >
                  Add Event
                </button>
              </form>
              <button
                className={`${s["modal-footer-button"]} ${s["modal-button-cancel"]}`}
                onClick={() => {
                  console.log("cancelled");
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {eventAdded && (
        <div className={`${s["modal-container-sent"]}`}>
          <img className={`${s["modal-image"]}`} src={"#"} />
          <div className={`${s["modal-text"]}`}>Event added!</div>
        </div>
      )}
    </div>
  );
};
