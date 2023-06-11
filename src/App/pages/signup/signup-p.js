import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import s from "./signup.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState(""); //confirmation of password

  const loginRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [loginFocus, setLoginFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdMatch, setPwdMatch] = useState("");
  const [validPwdMatch, setValidPwdMatch] = useState(false);
  const [pwdMatchFocus, setPwdMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign-up form submitted");
  };

  return (
    <div className={`${s["signUp"]}`}>
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
          <p className={`${s["paragraph-2"]}`}>Sign up</p>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-4"]} ${s["w-container"]}`}>
          <div className={`${s["w-form"]}`}>
            <form
              id="sign-up form"
              name="sign-up form"
              data-name="Sign-Up Form"
              // todo is 'get' method correct here?
              method="get"
              onSubmit={handleSubmit}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="email" className={`${s["field-label-2"]}`}>
                Password
              </label>
              <input
                type="email"
                className={`${s["w-input"]}`}
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder=""
                id={s["email"]}
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="email-3" className={`${s["field-label-2"]}`}>
                Confirm The Password
              </label>
              <input
                type="email"
                className={`${s["w-input"]}`}
                maxlength="256"
                name="email-3"
                data-name="Email 3"
                placeholder=""
                id={s["email-3"]}
                required=""
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
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
      <section
        className={`${s["section-2"]} ${s["wf-section"]} ${s["w-container"]}`}
      >
        <button
          form="sign-up form"
          className={`${s["w-container"]} ${s["button-copy"]} ${s["w-button"]}`}
        >
          SIGN UP
        </button>
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

export default SignUp;
