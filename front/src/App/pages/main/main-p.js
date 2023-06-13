import { Link } from "react-router-dom";

import MyCalendar from "../../comps/views/calendar";

import s from "./mainpage.module.css";

const Main = ({ username }) => {
  return (
    <div className={s.main}>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["w-layout-grid"]} ${s["grid-2"]}`}>
          <div
            id={s["w-node-f92008a7-8b35-66e3-c9e6-be074db36a69-442f355a"]}
            className={`${s["w-container"]}`}
          >
            <img
              src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png"
              loading="lazy"
              id={s["w-node-ca582dd3-54d8-958c-6433-3de79cc8350d-442f355a"]}
              sizes="(max-width: 638px) 100vw, 638px"
              srcSet="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014-p-500.png 500w, https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png 638w"
              alt=""
            />
          </div>
          <div
            id={s["w-node-_1a09ed2b-8753-fc1d-a82f-46661f8b457e-442f355a"]}
            className={`${s["container-7"]} ${s["w-container"]}`}
          >
            <div
              data-hover="false"
              data-delay="0"
              className={`${s["dropdown"]} ${s["w-dropdown"]}`}
            >
              <div
                className={`${s["dropdown-toggle"]} ${s["w-dropdown-toggle"]}`}
              >
                <div className={`${s["w-icon-dropdown-toggle"]}`}></div>
                <div className={`${s["text-block"]}`}>{username}</div>
              </div>
              <nav className={`${s["w-dropdown-list"]}`}>
                <Link to="../auth.html" className={`${s["w-dropdown-link"]}`}>
                  Sign Out
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
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
            to="./fullcalendar.html"
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
      <section className={`${s["section-7"]} ${s["wf-section"]}`}>
        <h1 className={`${s["heading-6"]}`}>
          Don&#x27;t miss out on any exciting occasion with Event Manager by
          your side!
        </h1>
        <div className={`${s["w-container"]}`}>
          <h1 className={`${s["heading-7"]}`}>©VabeTech 2023</h1>
        </div>
      </section>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=647656c1558e6661a7504185"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/js/webflow.54ba778de.js"
        type="text/javascript"
      ></script>
    </div>
  );
};

export default Main;
