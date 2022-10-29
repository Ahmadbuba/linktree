import React from "react";
import LinkCard from "../UI/LinkCard";
import classes from "./Profile.module.css";
import profilePic from "../../assests/profilePic.JPG";
import cameraIcon from "../../assests/Icon.png";
import arrowIcon from "../../assests/Content.png";
import dotsIcon from "../../assests/Contentt.png";

const Profile = () => {
  const profileSection = {
    profile__img: "",
    twitter: "https://twitter.com/emirbuba_2",
    slack: "Ahmad Buba",
    text: "Twitter Link",
  };
  let innertext = "";
  return (
    <React.Fragment>
      <div className={classes.arrow__link}>
        <img
          src={arrowIcon}
          className={classes.arrowIcon}
          alt="Share Icon arrow"
          height="20"
          width="25"
        />
        <img
          src={dotsIcon}
          alt="Share Icon dots"
          className={classes.dotsIcon}
          height="35"
          width="40"
        />
      </div>
      <div className={classes.pic}>
        <div className={classes.backdrop}></div>
        <img
          src={cameraIcon}
          alt="Camera Icon"
          className={classes.arrow__img}
        />
      </div>
      <LinkCard
        link={profileSection.twitter}
        text={profileSection.text}
        subtext={innertext}
        className={classes.center__alignment}
      />
    </React.Fragment>
  );
};

export default Profile;
