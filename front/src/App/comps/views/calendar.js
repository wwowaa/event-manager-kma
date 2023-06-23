import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    _id: { $oid: "64921d8937ce00b3c0dc96ac" },
    eventname: "Вистава «Споглядаючи сліди від ракет»",
    organiser: "Бадді НаУКМА",
    date: { $date: { $numberLong: "1687478400000" } },
    time: "17.00",
    location:
      "вулиця Іллінська 9, Культурно-Мистецький центр НаУКМА, 3 поверх, Актова зала",
    description:
      "Опинившись у вирі війни, шестеро друзів постають перед неможливістю повернути минуле, горем, болем та потребою зберегти найцінніше — змогу жити далі та залишатися поруч одне з одним.  Запрошуємо на подію, яка не залишить нікого байдужим. Вистава за оригінальним сценарієм могилянкинь, події якої відгукнуться кожній людині, що почула сигнал повітряної тривоги 24 лютого 2022 року.  Придбати квиток за донат на збір для батька могилянця на фронті можна за покликанням: https://forms.gle/VTsDYY95pyKCp45z5",
    __v: { $numberInt: "0" },
  },
];

const MyCalendar = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // const [openModal, setOpenModal] = useState(false);
  // const startDate = useRef();
  // const endDate = useRef();

  const [allEvents, setAllEvents] = useState(events);

  // function handleAddEvent(newEvent) {
  //   console.log(newEvent);
  //   setAllEvents([...allEvents, newEvent]);
  // }

  function handleSlotEvent({ slots }) {
    // console.log(slots);
    // startDate.current = Date.parse(slots[0]);
    // endDate.current = Date.parse(slots[slots.length - 1]);
    // setOpenModal(true);
  }

  useEffect(() => {
    // const fetchEvents = async () => {
    //   try {
    //     const res = await fetch("http://localhost:3000/events");
    //     console.log(res.data);
    //     const text = await res.text();
    //     console.log(text);
    //     const data = JSON.parse(text);
    //     console.log(data);
    //     if (res.ok) {
    //       setEvents(data.events);
    //     }
    //   } catch (err) {
    //     // console.log(err);
    //   }
    // };
    // fetchEvents();
  }, []);

  const [selected, setSelected] = useState();

  const handleSelected = (event) => {
    setSelected(event);

    // navigate(`../event/${event.id}`);
  };

  return (
    <div className="Calednar">
      {/* {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleAddEvent={(newEvent) => handleAddEvent(newEvent)}
          startDate={startDate.current}
          endDate={endDate.current}
        />
      )} */}
      <Calendar
        views={["month", "week", "day"]}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        selected={selected}
        onSelectEvent={handleSelected}
        // selectable
        // onSelectSlot={handleSlotEvent}
        // popup
      />
    </div>
  );
};

export default MyCalendar;
