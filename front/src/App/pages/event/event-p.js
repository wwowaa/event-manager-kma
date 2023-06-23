import { Link, useParams, useLocation } from "react-router-dom";

import MainLayout from "../../comps/views/layouts/main_layout";

import s from "./event.module.css";

const Event = () => {
  // let params = useParams();
  const location = useLocation();
  const {
    username,
    id,
    title,
    start,
    end,
    organiser,
    time,
    venue,
    description,
  } = location.state;
  return (
    <MainLayout username={username}>
      <section className={`${s["section-8"]} ${s["wf-section"]}`}>
        <div className={`${s["div-block"]}`}>
          <p className={`${s["paragraph-6-copy"]}`}>LOGO</p>
        </div>
        <div className={`${s["container-8"]} ${s["w-container"]}`}>
          <h1 className={`${s["heading-4"]}`}>{title}</h1>
        </div>
      </section>
      <div className={`${s["div-block-copy"]}`}>
        <p className={`${s["paragraph-6"]}`}>
          Organized by: {organiser}
          <br />
          <br />
          <br />
          Date: {start} at {time}
          <br />
          <br />
          at {venue}
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
          <p className={`${s["paragraph-7"]}`}>{description}</p>
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
              to="../main"
              aria-current="page"
              state={{ username: username }}
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
              to="../main"
              state={{ username: username }}
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
