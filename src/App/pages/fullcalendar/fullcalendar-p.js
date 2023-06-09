import { Link } from "react-router-dom";

import s from "./fullcalendar.module.css";

const FullCalendar = () => {
  return (
    <div className={`${s["fullcalendar"]}`}>
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
              srcset="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014-p-500.png 500w, https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png 638w"
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
                <div className={`${s["text-block"]}`}>USERNAME</div>
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
      <section className={`${s["section-8"]} ${s["wf-section"]}`}>
        <div className={`${s["container-8"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading-4"]}`}>FULL CALENDAR</h1>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-9"]} ${s["w-container"]}`}>
          <p className={`${s["paragraph-3"]}`}>Calendar Placeholder</p>
        </div>
      </section>
      <section className={`${s["section-5"]} ${s["wf-section"]}`}>
        <div className={`${s["container-10"]} ${s["w-container"]}`}>
          <Link
            to="./mainpage.html"
            className={`${s["button-2"]} ${s["w-button"]}`}
          >
            BACK
          </Link>
        </div>
      </section>
      <section className={`${s["section-7"]} ${s["wf-section"]}`}>
        <div className={`${s["w-container"]}`}>
          <h1 className={`${s["heading-7"]}`}>©VabeTech 2023</h1>
        </div>
      </section>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=647656c1558e6661a7504185"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/js/webflow.54ba778de.js"
        type="text/javascript"
      ></script>
    </div>
  );
};

export default FullCalendar;
