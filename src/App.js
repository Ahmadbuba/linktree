import classes from "./App.module.css";
import React from "react";
import Profile from "./pages/components/Profile/Profile";
import Links from "./pages/components/Links";
import gitIcon from "../src/assests/git_hub.png";
import slackIcon from "../src/assests/slack.png";
import logoIcon from "../src/assests/I4G.png";

import Footer from "./pages/components/Footer/Footer";
import ProfileIcons from "./pages/components/Footer/ProfileIcons";
import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <div className={classes.line}></div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
