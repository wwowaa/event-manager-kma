import { Link } from "react-router-dom";

import MyCalendar from "../../comps/views/calendar";
import MainLayout from "../../comps/views/layouts/main_layout";

import s from "./mainpage.module.css";

const Main = ({ username }) => {
  return (
    <MainLayout>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-8"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading-3"]}`}>
            WELCOME TO THE
            <br />
          </h1>
          <h1 className={`${s["heading-4"]}`}>EVENT MANAGER</h1>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-9"]} ${s["w-container"]}`}>
          <MyCalendar />
        </div>
      </section>
      <section className={`${s["section-5"]} ${s["wf-section"]}`}>
        <div className={`${s["container-10"]} ${s["w-container"]}`}>
          <Link
            to="../fullcalendar"
            className={`${s["button-2"]} ${s["w-button"]}`}
          >
            Full Calendar
          </Link>
        </div>
      </section>
      <section className={`${s["section-6"]} ${s["wf-section"]}`}>
        <div>
          <div className={`${s["w-layout-grid"]} ${s["grid-3"]}`}>
            <div
              id={s["w-node-_4522216f-ffe5-e469-eb5a-c932f26bf855-442f355a"]}
              className={`${s["container-11"]} ${s["w-container"]}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/64787882c7b7fd5334c45e37_fireworks-rocket-4613856-3831524.webp"
                loading="lazy"
                alt=""
              />
            </div>
            <div
              id={s["w-node-f7ffb499-4f19-5471-29f9-7d91a4904028-442f355a"]}
              className={`${s["container-12"]} ${s["w-container"]}`}
            >
              <h1
                id={s["w-node-d15ec96c-fe3b-9b73-f00b-04666c7a70a1-442f355a"]}
                className={`${s["heading-5"]}`}
              >
                About
              </h1>
              <p
                id={s["w-node-_6bec9db9-a065-09b6-4e12-15808e1840f5-442f355a"]}
                className={`${s["paragraph-5"]}`}
              >
                Welcome to Event Manager, the website dedicated to all the
                exciting events happening at NaUKMA! Our site offers a
                comprehensive calendar showcasing a wide range of events
                organized by various student organizations. With just a few
                clicks, you can explore each event, learn about the hosting
                student organization, and even leave your feedback anonymously
                or publicly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s["section-6-copy"]} ${s["wf-section"]}`}>
        <div>
          <div className={`${s["w-layout-grid"]} ${s["grid-3-copy"]}`}>
            <div
              id={s["w-node-f5a8ed81-d1d8-577e-3b80-5e7af2776b56-442f355a"]}
              className={`${s["container-12-copy"]} ${s["w-container"]}`}
            >
              <h1
                id={s["w-node-f5a8ed81-d1d8-577e-3b80-5e7af2776b57-442f355a"]}
                className={`${s["heading-5-copy"]}`}
              >
                Explore The Events
              </h1>
              <p
                id={s["w-node-f5a8ed81-d1d8-577e-3b80-5e7af2776b59-442f355a"]}
                className={`${s["paragraph-5-copy"]}`}
              >
                Event Manager is designed to provide you with a convenient and
                user-friendly platform to stay updated on the vibrant event
                scene at our university. Whether you are interested in attending
                lectures, workshops, performances, or social gatherings, our
                calendar has it all. You can easily navigate through the events
                and mark the ones you&#x27;re most excited about.
              </p>
            </div>
            <div
              id={s["w-node-f5a8ed81-d1d8-577e-3b80-5e7af2776b54-442f355a"]}
              className={`${s["container-11-copy"]} ${s["w-container"]}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/64787882ca359ee4f8294ca3_calendar-3981416-3297354.webp"
                loading="lazy"
                id={s["w-node-a3604fe3-0d42-4850-51fa-6d3502227824-442f355a"]}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${s["section-6-copy-copy"]} ${s["wf-section"]}`}>
        <div>
          <div className={`${s["w-layout-grid"]} ${s["grid-3"]}`}>
            <div
              id={s["w-node-aa6d8bb2-ad5b-fdcd-8850-1461a33fcad4-442f355a"]}
              className={`${s["container-11"]} ${s["w-container"]}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/647878825dc322b03d531496_feedback-message-3981418-3297356.webp"
                loading="lazy"
                alt=""
              />
            </div>
            <div
              id={s["w-node-aa6d8bb2-ad5b-fdcd-8850-1461a33fcad6-442f355a"]}
              className={`${s["container-12"]} ${s["w-container"]}`}
            >
              <h1
                id={s["w-node-aa6d8bb2-ad5b-fdcd-8850-1461a33fcad7-442f355a"]}
                className={`${s["heading-5"]}`}
              >
                Express Your Opinion
              </h1>
              <p
                id={s["w-node-aa6d8bb2-ad5b-fdcd-8850-1461a33fcad9-442f355a"]}
                className={`${s["paragraph-5"]}`}
              >
                We understand the importance of feedback, which is why we
                encourage everyone to share their thoughts and experiences. By
                leaving a comment or review, you can contribute to the community
                and help organizers enhance their future events. Whether you
                want to express your appreciation, provide constructive
                criticism, or simply share your excitement, your voice matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Main;
