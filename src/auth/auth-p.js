import s from "./auth.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Authorization = () => {
  return (
    <div className={`${s['auth']}`}>
      <section className={`${s['wf-section']}`}>
        <div className={`${s['container']} ${s['w-container']}`}>
          <img
            src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/647658ea0a96c077e089650e_Vectors-Wrapper.svg"
            loading="lazy"
            alt=""
          />
        </div>
      </section>
      <section className={`${s['wf-section']}`}>
        <div className={`${s['container-2']} ${s['w-container']}`}>
          <h1 className={`${s['heading']}`}>EVENT MANAGER</h1>
        </div>
      </section>
      <section className={`${s['section']} ${s['wf-section']}`}>
        <div className={`${s['container-3']} ${s['w-container']}`}>
          <p className={`${s['paragraph-2']}`}>Sign in</p>
        </div>
      </section>
      <section className={`${s['wf-section']}`}>
        <div className={`${s['container-4']} ${s['w-container']}`}>
          <div className={`${s['w-form']}`}>
            <form
              id={s['email-form']}
              name="email-form"
              data-name="Email Form"
              method="get"
            >
              <label for="name" className={`${s['field-label']}`}>
                Email
              </label>
              <input
                type="text"
                className={`${s['w-input']}`}
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder=""
                id={s['name']}
              />
              <label for="email" className={`${s['field-label-2']}`}>
                Password
              </label>
              <input
                type="email"
                className={`${s['w-input']}`}
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder=""
                id={s['email']}
                required=""
              />
            </form>
            <div className={`${s['w-form-done']}`}>
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className={`${s['w-form-fail']}`}>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s['section-2']} ${s['wf-section']}`}>
        <div className={`${s['w-layout-grid']} ${s['grid']}`}>
          <div
            id={s['w-node-_1f4b4022-35dc-bf16-9e9e-d0eca0176e70-a7504188']}
            className={`${s['w-container']}`}
          >
            <Link to="../main" className={`${s['button']} ${s['w-button']}`}>
              SIGN IN
            </Link>
          </div>
          <div
            id={s['w-node-e338ce3f-f36d-760c-8337-1c162cb76e4a-a7504188']}
            className={`${s['w-container']}`}
          >
            <Link to="./signup" className={`${s['button-copy']} ${s['w-button']}`}>
              SIGN UP
            </Link>
          </div>
        </div>
      </section>
      <section className={`${s['section-4']} ${s['wf-section']}`}>
        <div className={`${s['container-5']} ${s['w-container']}`}>
          <a href="./passreset1.html">Forgot your password?</a>
        </div>
      </section>
      <section className={`${s['section-3']} ${s['wf-section']}`}>
        <div className={`${s['container-6']} ${s['w-container']}`}>
          <h1 className={`${s['heading-2']}`}>©VabeTech 2023</h1>
        </div>
      </section>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=647656c1558e6661a7504185"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>
      <script src="./auth.js" type="text/javascript"></script>
    </div>
  );
};

export default Authorization;
