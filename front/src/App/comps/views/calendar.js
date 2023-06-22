import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useRef } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Modal } from "./add_event_dialog-p";

import s from "./../styles/calendar.module.css";

const locales = {
  uk: require("date-fns/locale/uk"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 6, 0),
    end: new Date(2023, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2023, 6, 7),
    end: new Date(2023, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 6, 20),
    end: new Date(20233, 6, 23),
  },
];

const MyCalendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const startDate = useRef();
  const endDate = useRef();

  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent(newEvent) {
    console.log(newEvent);
    setAllEvents([...allEvents, newEvent]);
  }

  function handleSlotEvent({ slots }) {
    // console.log(slots);

    startDate.current = Date.parse(slots[0]);
    endDate.current = Date.parse(slots[slots.length - 1]);

    setOpenModal(true);
  }

  return (
    <div className="Calednar">
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleAddEvent={(newEvent) => handleAddEvent(newEvent)}
          startDate={startDate.current}
          endDate={endDate.current}
        />
      )}
      <Calendar
        views={["month", "week", "day"]}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        selectable
        onSelectSlot={handleSlotEvent}
        popup
      />
    </div>
  );
};

export default MyCalendar;
