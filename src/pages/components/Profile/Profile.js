import React from "react";

import classes from "./Profile.module.css";

import Icon from "./Icon";
import ProfilePhoto from "./ProfilePhoto";

const Profile = () => {
  const slack = "ahmadBuba";

  return (
    <React.Fragment>
      <Icon />
      <ProfilePhoto />
      <span className={classes.myName} id="twitter">
        emirbuba_2
      </span>
      <span className={classes.slackName} id="slack">
        {slack}
      </span>
    </React.Fragment>
  );
};

export default Profile;
