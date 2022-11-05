import React from "react";

import classes from "./Profile.module.css";
import profilePic from "../../../assests/profilePic.JPG";
import cameraIcon from "../../../assests/Icon.png";
import arrowIcon from "../../../assests/Content.png";
import dotsIcon from "../../../assests/Contentt.png";
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
