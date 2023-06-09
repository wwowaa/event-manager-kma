import { Link } from "react-router-dom";

import s from "./passreset1.module.css";

const PassReset1 = () => {
  return (
    <div className={`${s["passreset1"]}`}>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container"]} ${s["w-container"]}`}>
          <img
            src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/647658ea0a96c077e089650e_Vectors-Wrapper.svg"
            loading="lazy"
            alt=""
          />
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-2"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading"]}`}>EVENT MANAGER</h1>
        </div>
      </section>
      <section className={`${s["section"]} ${s["wf-section"]}`}>
        <div className={`${s["container-3"]} ${s["w-container"]}`}>
          <p className={`${s["paragraph-2"]}`}>Password Reset</p>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-4"]} ${s["w-container"]}`}>
          <div className={`${s["w-form"]}`}>
            <form
              id={s["email-form"]}
              name="email-form"
              data-name="Email Form"
              method="get"
            >
              <label for="name-2" className={`${s["field-label"]}`}>
                Username
              </label>
              <input
                type="email"
                className={`${s["w-input"]}`}
                maxlength="256"
                name="email-2"
                data-name="Email 2"
                placeholder=""
                id={s["email-2"]}
                required=""
              />
              <label for="name" className={`${s["field-label"]}`}>
                Email
              </label>
              <input
                type="text"
                className={`${s["w-input"]}`}
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder=""
                id={s["name"]}
              />
            </form>
            <div className={`${s["w-form-done"]}`}>
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className={`${s["w-form-fail"]}`}>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s["section-2"]} ${s["wf-section"]}`}>
        <div
          id={s["w-node-e338ce3f-f36d-760c-8337-1c162cb76e4a-a7504188"]}
          className={`${s["container-14"]} ${s["w-container"]}`}
        >
          <Link
            to="./passreset2.html"
            className={`${s["button-copy"]} ${s["w-button"]}`}
          >
            SUBMIT
          </Link>
        </div>
      </section>
      <section className={`${s["section-3"]} ${s["wf-section"]}`}>
        <div className={`${s["container-6"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading-2"]}`}>©VabeTech 2023</h1>
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

export default PassReset1;
