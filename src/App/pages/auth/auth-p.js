import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "./auth.module.css";

const LOGIN_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Auth = () => {
  const loginRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [loginFocus, setLoginFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loginRef.current.focus();
  });

  useEffect(() => {
    const result = LOGIN_REGEX.test(login);
    console.log(result);
    console.log(login);
    setValidLogin(result);
  }, [login]);

  useEffect(() => {
    setErrMsg("");
  }, [login, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign-in form submitted");

    const v1 = LOGIN_REGEX.test(login);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    // TODO: remove console.logs before deployment
    // try {
    //     const response = await axios.post(REGISTER_URL,
    //         JSON.stringify({ user, pwd }),
    //         {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true
    //         }
    //     );
    //     console.log(response?.data);
    //     console.log(response?.accessToken);
    //     console.log(JSON.stringify(response))
    //     setSuccess(true);
    //     //clear state and controlled inputs
    //     //need value attrib on inputs for this
    //     setUser('');
    //     setPwd('');
    //     setMatchPwd('');
    // } catch (err) {
    //     if (!err?.response) {
    //         setErrMsg('No Server Response');
    //     } else if (err.response?.status === 409) {
    //         setErrMsg('Username Taken');
    //     } else {
    //         setErrMsg('Registration Failed')
    //     }
    //     errRef.current.focus();
    // }
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
          {success ? (
            <section>
              <h1>Success!</h1>
              <p>
                <a href="#">Sign In</a>
              </p>
            </section>
          ) : (
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
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
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
                <button
                  className={`${s["w-container"]} ${s["button"]} ${s["w-button"]}`}
                  disabled={!validLogin || !validPwd ? true : false}
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
          )}
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
        crossorigin="anonymous"
      ></script>
      <script src="./auth.js" type="text/javascript"></script>
    </div>
  );
};

export default Auth;
