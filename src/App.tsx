import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
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
import { ResponsiveProvider } from "./hooks/useResponsive";

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
  return (
    <React.Fragment>
      <ResponsiveProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </ResponsiveProvider>
    </React.Fragment>
  );
}

export default App;
