import { Link } from "react-router-dom";

import s from "../styles/layout.module.css";
// import s from "../styles/layout.module.css";

const MainHeader = () => {
  return (
    <header className={`${s["wf-section"]}`}>
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
            srcSet="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014-p-500.png 500w, https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png 638w"
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
              <div className={`${s["text-block"]}`}>{"Username"}</div>
            </div>
            <nav className={`${s["w-dropdown-list"]}`}>
              <Link to="../auth.html" className={`${s["w-dropdown-link"]}`}>
                Sign Out
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
