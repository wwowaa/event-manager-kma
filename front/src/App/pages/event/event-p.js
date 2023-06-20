import { Link } from "react-router-dom";

import MainLayout from "../../comps/views/main_layout";

import s from "./event.module.css";

const Event = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Event;
