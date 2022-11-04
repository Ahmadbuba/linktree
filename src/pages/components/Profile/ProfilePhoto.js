import classes from "./ProfilePhoto.module.css";
import profilePic from "../../../assests/profilePic.JPG";
import cameraIcon from "../../../assests/Icon.png";

const ProfilePhoto = () => {
  return (
    <div className={classes.pic}>
      <img
        src={profilePic}
        className={classes.profile_pic}
        id="profile__img"
        alt="profileimage"
      />
      <img
        src={cameraIcon}
        className={classes.camera_icon}
        height="5"
        width="5"
        alt="cameraicon"
      />
    </div>
  );
};

export default ProfilePhoto;
