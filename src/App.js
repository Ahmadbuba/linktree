import classes from "./App.module.css";
import React from "react";
import Profile from "./pages/components/Profile/Profile";
import Links from "./pages/components/Links/Links";
import gitIcon from "../src/assests/git_hub.png";
import slackIcon from "../src/assests/slack.png";
import logoIcon from "../src/assests/I4G.png";

import Footer from "./pages/components/Footer/Footer";
import ProfileIcons from "./pages/components/Footer/ProfileIcons";

function App() {
  return (
    <React.Fragment>
      <Profile />
      <Links />
      {/* <div className={classes.logo__div}>
        <img
          src={slackIcon}
          height="30"
          width="30"
          className={classes.logo__image}
          alt="Slack Icon"
        />
        <img
          src={gitIcon}
          height="100"
          width="30"
          className={classes.logo__image}
          alt="Git Icon"
        />
      </div> */}
      <ProfileIcons />
      <div className={classes.line}></div>
      {/* <div className={classes.footer__div}>
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
          alt="Logo Icon"
        />
      </div> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
