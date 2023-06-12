import { Link } from "react-router-dom";

import s from "./event.module.css";

const Event = () => {
  return (
    <div className={`${s["event"]}`}>
      <section className={`${s["wf-section"]}`}>
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
              srcset="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014-p-500.png 500w, https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png 638w"
              alt=""
            />
          </div>
          <div
            id={s["w-node-_1a09ed2b-8753-fc1d-a82f-46661f8b457e-442f355a"]}
            className={`${s["container-7"]} ${s["w-container"]}`}
          ></div>
        </div>
      </section>
      <section className={`${s["section-8"]} ${s["wf-section"]}`}>
        <div className={`${s["div-block"]}`}>
          <p className={`${s["paragraph-6-copy"]}`}>LOGO</p>
        </div>
        <div className={`${s["container-8"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading-4"]}`}>EVENT NAME</h1>
        </div>
      </section>
      <div className={`${s["div-block-copy"]}`}>
        <p className={`${s["paragraph-6"]}`}>
          Organized by:
          <br />
          <br />
          ORGANIZATION NAME
          <br />
          <br />
          <br />
          <br />
          Date: DD/MM/YY at HH.MM
          <br />
          <br />
          at PLACE
          <br />‍
        </p>
      </div>
      <section className={`${s["wf-section"]}`}>
        <div className={`${s["container-9"]} ${s["w-container"]}`}>
          <p className={`${s["paragraph-3"]}`}>
            Possible Image or Poster Placeholder
          </p>
        </div>
      </section>
      <section className={`${s["section-5"]} ${s["wf-section"]}`}>
        <div className={`${s["container-10"]} ${s["w-container"]}`}>
          <p className={`${s["paragraph-7"]}`}>
            Optional Description Text of the Event: <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            fermentum arcu quis tellus maximus, sit amet tincidunt erat
            faucibus. Maecenas nec vulputate massa. Donec quis ex urna. Sed
            pellentesque odio at sapien dignissim sollicitudin. Nullam a ipsum
            tortor. Duis a diam non massa finibus pharetra quis eu nulla. In
            lorem ante, aliquet ut mauris vel, facilisis faucibus ante. Morbi
            feugiat facilisis facilisis. Etiam tempus libero in nunc condimentum
            pharetra. Phasellus congue diam turpis, id dignissim nibh ultrices
            a. Mauris tortor lacus, tristique at commodo nec, volutpat ut mi.
          </p>
        </div>
      </section>
      <section className={`${s["section-2-copy"]} ${s["wf-section"]}`}>
        <div className={`${s["w-layout-grid"]} ${s["grid"]}`}>
          <div
            id={s["w-node-_92111368-c205-f514-14e9-074c3d5db14a-442f355a"]}
            className={`${s["w-container"]}`}
          >
            <Link
              className={`${s["button"]} ${s["w-button"]} ${s["w--current"]}`}
              to="./mainpage.html"
              aria-current="page"
            >
              REMIND ME
            </Link>
          </div>
          <div
            id={s["w-node-_92111368-c205-f514-14e9-074c3d5db14d-442f355a"]}
            className={`${s["w-container"]}`}
          >
            <Link
              className={`${s["button-copy"]} ${s["w-button"]}`}
              to="./mainpage.html"
            >
              {" "}
              BACK{" "}
            </Link>
          </div>
        </div>
      </section>
      <section className={`${s["section-7"]} ${s["wf-section"]}`}>
        <div className={`${s["w-container"]}`}>
          <h1 className={`${s["heading-7"]}`}>©VabeTech 2023</h1>
        </div>
      </section>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=647656c1558e6661a7504185"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/js/webflow.54ba778de.js"
        type="text/javascript"
      ></script>
    </div>
  );
};

export default Event;
