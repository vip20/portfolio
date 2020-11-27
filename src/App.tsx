import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDownload,
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import useResponsive, { ResponsiveProvider } from "./hooks/useResponsive";
import Landing from "./components/landing";
import { BREAKPOINT_MOBILE } from "./core/constants";

library.add(
  fab,
  faGithub,
  faTwitter,
  faLinkedin,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faDownload,
  faMobileAlt,
  faCode
);
function App() {
  const { width } = useResponsive();
  return (
    <React.Fragment>
      <ResponsiveProvider>
        <div className={width < BREAKPOINT_MOBILE ? "app sm" : "app lg"}>
          <Router>
            <Switch>
              <Route exact path="/" component={Landing}></Route>
            </Switch>
          </Router>
        </div>
      </ResponsiveProvider>
    </React.Fragment>
  );
}

export default App;
