import classes from "./App.module.css";
import React from "react";
import Profile from "./components/Profile/Profile";
import Links from "./components/Links/Links";
import gitIcon from "../src/assests/git_hub.png";
import slackIcon from "../src/assests/slack.png";
import logoIcon from "../src/assests/I4G.png";

function App() {
  return (
    <React.Fragment>
      <Profile />
      <Links />
      <div className={classes.logo__div}>
        <img
          src={slackIcon}
          height="30"
          width="30"
          className={classes.logo__image}
        />
        <img
          src={gitIcon}
          height="100"
          width="30"
          className={classes.logo__image}
        />
      </div>
      <div className={classes.footer__div}>
        <span className={classes.title__internship}>
          Zuri <div className={classes.title_internship_circle}></div>
          Internship
        </span>
        <div>
          <span className={classes.title_subtext}>
            HNG Internship 9 Frontend Task
          </span>
        </div>
        <img
          src={logoIcon}
          height="100"
          width="100"
          className={classes.logo__image}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
