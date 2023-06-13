import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import s from "./auth.module.css";

const Auth = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  });

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/auth", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.user) {
        navigate("../main");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className={`${s["auth"]}`}>
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
          <p className={`${s["paragraph-2"]}`}>Sign in</p>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-4"]} ${s["w-container"]}`}>
          <section className={s.test}>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit} className={`${s["w-form"]}`}>
              <label htmlFor="emailname" className={`${s["field-label"]}`}>
                Username:
              </label>
              <input
                className={`${s["w-input"]}`}
                type="text"
                id="emailname"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-describedby="uidnote"
              />
              <label htmlFor="password" className={`${s["field-label"]}`}>
                Password:
              </label>
              <input
                className={`${s["w-input"]}`}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                aria-describedby="passwordnote"
              />
              <button
                className={`${s["w-container"]} ${s["button"]} ${s["w-button"]}`}
              >
                Sign In
              </button>
            </form>
            <p>
              Not registred?
              <br />
              <span className="line">
                <Link to="../signup.html">Sign up</Link>
              </span>
            </p>
          </section>
        </div>
      </section>
      <section className={`${s["section-4"]} ${s["wf-section"]}`}>
        <div className={`${s["container-5"]} ${s["w-container"]}`}>
          <Link to="../passreset1.html">Forgot your password?</Link>
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
        crossOrigin="anonymous"
      ></script>
      <script src="./auth.js" type="text/javascript"></script>
    </div>
  );
};

export default Auth;
