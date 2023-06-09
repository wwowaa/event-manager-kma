import { Helmet, HelmetProvider } from "react-helmet-async";

const Event = () => {
  return (
    <div className="event">
      <HelmetProvider>
        <Helmet>
          <meta content="Main Page" property="og:title" />
          <meta content="Main Page" property="twitter:title" />
        </Helmet>
      </HelmetProvider>
      <section class="wf-section">
        <div class="w-layout-grid grid-2">
          <div
            id="w-node-f92008a7-8b35-66e3-c9e6-be074db36a69-442f355a"
            class="w-container"
          >
            <img
              src="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png"
              loading="lazy"
              id="w-node-ca582dd3-54d8-958c-6433-3de79cc8350d-442f355a"
              sizes="(max-width: 638px) 100vw, 638px"
              srcset="https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014-p-500.png 500w, https://uploads-ssl.webflow.com/647656c1558e6661a7504185/6478735b446190bbebce5d89_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-01%20133014.png 638w"
              alt=""
            />
          </div>
          <div
            id="w-node-_1a09ed2b-8753-fc1d-a82f-46661f8b457e-442f355a"
            class="container-7 w-container"
          ></div>
        </div>
      </section>
      <section class="section-8 wf-section">
        <div class="div-block">
          <p class="paragraph-6-copy">LOGO</p>
        </div>
        <div class="container-8 w-container">
          <h1 class="heading-4">EVENT NAME</h1>
        </div>
      </section>
      <div class="div-block-copy">
        <p class="paragraph-6">
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
      <section class="wf-section">
        <div class="container-9 w-container">
          <p class="paragraph-3">Possible Image or Poster Placeholder</p>
        </div>
      </section>
      <section class="section-5 wf-section">
        <div class="container-10 w-container">
          <p class="paragraph-7">
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
      <section class="section-2-copy wf-section">
        <div class="w-layout-grid grid">
          <div
            id="w-node-_92111368-c205-f514-14e9-074c3d5db14a-442f355a"
            class="w-container"
          >
            <a
              href="./mainpage.html"
              aria-current="page"
              class="button w-button w--current"
            >
              REMIND ME
            </a>
          </div>
          <div
            id="w-node-_92111368-c205-f514-14e9-074c3d5db14d-442f355a"
            class="w-container"
          >
            <a href="./mainpage.html" class="button-copy w-button">
              {" "}
              BACK{" "}
            </a>
          </div>
        </div>
      </section>
      <section class="section-7 wf-section">
        <div class="w-container">
          <h1 class="heading-7">©VabeTech 2023</h1>
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

export default Event;
