import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import s from "./signup.module.css";
import AuthLayout from "../../comps/views/auth_layout";

const SignUp = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sign-up form submitted");

    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password, confirmPassword }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);

      if (data.user) {
        navigate("../main");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout>
      <section className={`${s["section"]} ${s["wf-section"]}`}>
        <div className={`${s["container-3"]} ${s["w-container"]}`}>
          <p className={`${s["paragraph-2"]}`}>Sign up</p>
        </div>
      </section>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-4"]} ${s["w-container"]}`}>
          <section className={s.test}>
            <form onSubmit={handleSubmit} className={`${s["w-form"]}`}>
              <label htmlFor="username" className={`${s["field-label"]}`}>
                Username:
              </label>
              <input
                className={`${s["w-input"]}`}
                type="text"
                id="username"
                ref={usernameRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <label htmlFor="email" className={`${s["field-label"]}`}>
                Email:
              </label>
              <input
                className={`${s["w-input"]}`}
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
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
              />
              <label
                className={`${s["field-label"]}`}
                htmlFor="confirm_password"
              >
                Confirm Password:
              </label>
              <input
                className={`${s["w-input"]}`}
                type="password"
                id="confirm_password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
              <button
                className={`${s["w-container"]} ${s["button"]} ${s["w-button"]}`}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </section>
        </div>
      </section>
    </AuthLayout>
  );
};

export default SignUp;
