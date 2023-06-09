import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

import Authorization from "./auth/Authorization";
import Main from "./main/main";
import FullCalendar from "./fullcalendar/fullcalendar";
import SignUp from "./signup/signup";
import PassReset1 from "./passreset1/passreset1";
import PassReset2 from "./passreset2/passreset2";
import Event from "./event/event";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta charset="utf-8" />
          <title>VabeTech&#x27;s Event Manager</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {/* <meta content="Main Page" property="og:title" />
          <meta content="Main Page" property="twitter:title" /> */}

          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            href="https://fonts.gstatic.com"
            rel="preconnect"
            crossorigin="anonymous"
          />
          <script
            src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
            type="text/javascript"
          ></script>
          <script type="text/javascript">
            {WebFont.load({
              google: {
                families: [
                  "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
                  "Montserrat Alternates:regular",
                ],
              },
            })}
          </script>
          {/* 
          <script type="text/javascript">
            {
              !(function (o, c) {
                var n = c.documentElement,
                  t = " w-mod-";
                (n.className += t + "js"),
                  ("ontouchstart" in o ||
                    (o.DocumentTouch && c instanceof DocumentTouch)) &&
                    (n.className += t + "touch");
              })(window, document)
            }
          </script> */}

          <link
            href="https://uploads-ssl.webflow.com/img/favicon.ico"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link
            href="https://uploads-ssl.webflow.com/img/webclip.png"
            rel="apple-touch-icon"
          />
        </Helmet>
      </HelmetProvider>
      <Router>
        <Routes>
          <Route path="auth" element={<Authorization />} />
          <Route path="main" element={<Main />} />
          <Route path="event" element={<Event />} />
          <Route path="fullcalendar" element={<FullCalendar />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="passreset1" element={<PassReset1 />} />
          <Route path="passreset2" element={<PassReset2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
