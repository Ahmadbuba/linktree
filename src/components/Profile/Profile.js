import React from "react";
import LinkCard from "../UI/LinkCard";
import classes from "./Profile.module.css";
import profilePic from "../../assests/profilePic.JPG";
import cameraIcon from "../../assests/Icon.png";
import arrowIcon from "../../assests/Content.png";
import dotsIcon from "../../assests/Contentt.png";

const Profile = (props) => {
  const profileSection = {
    profile__img: profilePic,
    twitter: "https://twitter.com/emirbuba_2",
    slack: props.slack,
  };
  let text = "Twitter Link";
  let innertext = "";
  return (
    <React.Fragment>
      <div className={classes.arrow__link}>
        <img
          src={arrowIcon}
          className={classes.arrowIcon}
          height="20"
          width="25"
        />
        <img
          src={dotsIcon}
          className={classes.dotsIcon}
          height="35"
          width="40"
        />
      </div>
      <div className={classes.pic}>
        <div className={classes.backdrop}></div>
        <img src={cameraIcon} className={classes.arrow__img} />
      </div>

      <h1 className={classes.myName}>Ahmad Buba</h1>

      <LinkCard link={profileSection.twitter} text={text} subtext={innertext} />
    </React.Fragment>
  );
};

export default Profile;
