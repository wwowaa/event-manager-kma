import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "./signup.module.css";
import MainLayout from "../../comps/views/main_layout";

const LOGIN_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const navigate = useNavigate();

  const loginRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [loginFocus, setLoginFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  useEffect(() => {
    setValidLogin(LOGIN_REGEX.test(login));
  }, [login]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [login, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sign-up form submitted");
    const v1 = LOGIN_REGEX.test(login);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify({ login, pwd, matchPwd }),
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
    <MainLayout>
      <section className={`${s["section"]} ${s["wf-section"]}`}>
        <div className={`${s["container-3"]} ${s["w-container"]}`}>
          <p className={`${s["paragraph-2"]}`}>Sign up</p>
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
              <label htmlFor="loginname" className={`${s["field-label"]}`}>
                Username:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validLogin ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validLogin || !login ? "hide" : "invalid"}
                />
              </label>
              <input
                className={`${s["w-input"]}`}
                type="text"
                id="loginname"
                ref={loginRef}
                autoComplete="off"
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                required
                aria-invalid={validLogin ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setLoginFocus(true)}
                onBlur={() => setLoginFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  loginFocus && login && !validLogin
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <label htmlFor="password" className={`${s["field-label"]}`}>
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !pwd ? "hide" : "invalid"}
                />
              </label>
              <input
                className={`${s["w-input"]}`}
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>

              <label className={`${s["field-label"]}`} htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPwd ? "hide" : "invalid"}
                />
              </label>
              <input
                className={`${s["w-input"]}`}
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>

              <button
                className={`${s["w-container"]} ${s["button"]} ${s["w-button"]}`}
                disabled={!validLogin || !validPwd ? true : false}
              >
                Sign Up
              </button>
            </form>
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

export default SignUp;
