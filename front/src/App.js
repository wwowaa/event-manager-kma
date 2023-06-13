import { Helmet, HelmetProvider } from "react-helmet-async";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./App/pages/supportive/NotFound";
import Auth from "./App/pages/auth/auth-p";
import Main from "./App/pages/main/main-p";
import FullCalendar from "./App/pages/fullcalendar/fullcalendar-p";
import SignUp from "./App/pages/signup/signup-p";
import PassReset1 from "./App/pages/passreset1/passreset1-p";
import PassReset2 from "./App/pages/passreset2/passreset2-p";
import Event from "./App/pages/event/event-p";

import "./App.css";
import MainLayout from "./App/comps/views/main_layout";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta charset="utf-8" />
          <title>VabeTech&#x27;s Event Manager</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Main Page" property="og:title" />
          <meta content="Main Page" property="twitter:title" />

          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            href="https://fonts.gstatic.com"
            rel="preconnect"
            crossOrigin="anonymous"
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
          <Route path="auth" element={<Auth />} />
          <Route path="main" element={<Main />} />
          <Route path="event" element={<Event />} />
          <Route path="fullcalendar" element={<FullCalendar />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="passreset1" element={<PassReset1 />} />
          <Route path="passreset2" element={<PassReset2 />} />

          <Route path="test" element={<MainLayout />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
