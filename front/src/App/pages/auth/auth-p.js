import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../comps/views/layouts/auth_layout.js";

import s from "./auth.module.css";

const Auth = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signIn button clicked");

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

  const handleSignUpButton = () => {
    console.log("signUp button clicked");
    navigate("../signup");
  };

  return (
    <AuthLayout>
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

              <section className={s.submit}>
                <button
                  className={`${s["w-container"]} ${s["button"]} ${s["w-button"]}`}
                >
                  Sign In
                </button>
                <button
                  className={`${s["button-copy"]} ${s["w-button"]}`}
                  onClick={handleSignUpButton}
                >
                  Sign Up
                </button>
              </section>
            </form>
          </section>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Auth;
