import React from "react";
import LinkCard from "../UI/LinkCard";
import classes from "./Profile.module.css";
import profilePic from "../../assests/profilePic.JPG";

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
      <div className={classes.arrow__link}></div>
      <div className={classes.pic}>
        <img src={profilePic} alt="Girl in a jacket" className={classes.img} />
        <div className={classes.backdrop}></div>
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
