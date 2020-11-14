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
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGithub, faTwitter, faLinkedin, faEnvelope, faMapMarker);
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
