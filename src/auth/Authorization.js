import authCss from "./auth.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Authorization = () => {
  return (
    <div classNameName={authCss.auth}>
      <HelmetProvider>
        <Helmet></Helmet>
      </HelmetProvider>

      <section className={"authCss.wf - section"}>
        <div className={"authCss.container w-container"}>
          <img
            src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/647658ea0a96c077e089650e_Vectors-Wrapper.svg"
            loading="lazy"
            alt=""
          />
        </div>
      </section>
      <section className={"authCss.wf-section"}>
        <div className={"authCss.container-2 w-container"}>
          <h1 className={"authCss.heading"}>EVENT MANAGER</h1>
        </div>
      </section>
      <section className={"authCss.section wf-section"}>
        <div className={"authCss.container-3 w-container"}>
          <p className={"authCss.paragraph-2"}>Sign in</p>
        </div>
      </section>
      <section className={"authCss.wf-section"}>
        <div className={"authCss.container-4 w-container"}>
          <div className={"authCss.w-form"}>
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
            >
              <label for="name" className={"authCss.field-label"}>
                Email
              </label>
              <input
                type="text"
                className={"authCss.w-input"}
                maxlength="256"
                name="name"
                data-name="Name"
                placeholder=""
                id="name"
              />
              <label for="email" className={"authCss.field-label-2"}>
                Password
              </label>
              <input
                type="email"
                className={"authCss.w-input"}
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder=""
                id="email"
                required=""
              />
            </form>
            <div className={"authCss.w-form-done"}>
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className={"authCss.w-form-fail"}>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </section>
      <section className={"authCss.section-2 wf-section"}>
        <div className={"authCss.w-layout-grid grid"}>
          <div
            id="w-node-_1f4b4022-35dc-bf16-9e9e-d0eca0176e70-a7504188"
            className={"authCss.w-container"}
          >
            <Link to="../main" className={"authCss.button w-button"}>
              SIGN IN
            </Link>
          </div>
          <div
            id="w-node-e338ce3f-f36d-760c-8337-1c162cb76e4a-a7504188"
            className={"authCss.w-container"}
          >
            <Link to="./signup" className={"authCss.button-copy w-button"}>
              SIGN UP
            </Link>
          </div>
        </div>
      </section>
      <section className={"authCss.section-4 wf-section"}>
        <div className={"authCss.container-5 w-container"}>
          <a href="./passreset1.html">Forgot your password?</a>
        </div>
      </section>
      <section className={"authCss.section-3 wf-section"}>
        <div className={"authCss.container-6 w-container"}>
          <h1 className={"authCss.heading-2"}>©VabeTech 2023</h1>
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
