import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MyCalendar from "../../comps/views/calendar";
import MainLayout from "../../comps/views/layouts/main_layout";
import { Modal } from "../../comps/views/add_event_dialog-p.js";

import s from "./fullcalendar.module.css";

const FullCalendar = () => {
  const location = useLocation();
  const { username } = location.state;

  return (
    <MainLayout username={username}>
      <section className={`${s["section-8"]} ${s["wf-section"]}`}>
        <div className={`${s["container-8"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading-4"]}`}>FULL CALENDAR</h1>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-9"]} ${s["w-container"]}`}>
          <MyCalendar username={username} />
        </div>
      </section>
      <section className={`${s["section-5"]} ${s["wf-section"]}`}>
        <div className={`${s["container-10"]} ${s["w-container"]}`}>
          <Link
            to="../main"
            state={{ username: username }}
            className={`${s["button-2"]} ${s["w-button"]}`}
          >
            BACK
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default FullCalendar;
