import { Helmet, HelmetProvider } from "react-helmet-async";

const FullCalendar = () => {
  return (
    <div className="fullcalendar">
      <HelmetProvider>
        <Helmet></Helmet>
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
          >
            <div data-hover="false" data-delay="0" class="dropdown w-dropdown">
              <div class="dropdown-toggle w-dropdown-toggle">
                <div class="w-icon-dropdown-toggle"></div>
                <div class="text-block">USERNAME</div>
              </div>
              <nav class="w-dropdown-list">
                <a href="./auth.html" class="w-dropdown-link">
                  Sign Out
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="section-8 wf-section">
        <div class="container-8 w-container">
          <h1 class="heading-4">FULL CALENDAR</h1>
        </div>
      </section>
      <section class="wf-section">
        <div class="container-9 w-container">
          <p class="paragraph-3">Calendar Placeholder</p>
        </div>
      </section>
      <section class="section-5 wf-section">
        <div class="container-10 w-container">
          <a href="./mainpage.html" class="button-2 w-button">
            BACK
          </a>
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

export default FullCalendar;
