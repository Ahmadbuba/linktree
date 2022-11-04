import classes from "./ProfileIcons.module.css";
import gitIcon from "../../../../src/assests/git_hub.png";
import slackIcon from "../../../../src/assests/slack.png";

const ProfileIcons = () => {
  return (
    <div className={classes.logo__div}>
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
    </div>
  );
};

export default ProfileIcons;
