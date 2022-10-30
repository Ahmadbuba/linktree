import React from "react";

import classes from "./Profile.module.css";
import profilePic from "../../assests/profilePic.JPG";
import cameraIcon from "../../assests/Icon.png";
import arrowIcon from "../../assests/Content.png";
import dotsIcon from "../../assests/Contentt.png";

const Profile = () => {
  const profileSection = {
    profile__img: profilePic,

    slack: "ahmadBuba",
  };

  return (
    <React.Fragment>
      <div className={classes.arrow__link}>
        <img
          src={arrowIcon}
          className={classes.arrowIcon}
          height="20"
          width="25"
          alt="Arrow Icon"
        />
        <img
          src={dotsIcon}
          className={classes.dotsIcon}
          height="35"
          width="40"
          alt="Dots Icon"
        />
      </div>
      <div className={classes.pic}>
        <img
          src={profilePic}
          className={classes.profile_pic}
          id="profile__img"
        />
        <img
          src={cameraIcon}
          className={classes.camera_icon}
          height="5"
          width="5"
        />
      </div>

      <span className={classes.myName} id="twitter">
        emirbuba_2
      </span>
      <span className={classes.slackName} id="slack">
        {profileSection.slack}
      </span>
    </React.Fragment>
  );
};

export default Profile;
