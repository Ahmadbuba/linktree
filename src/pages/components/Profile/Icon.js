import classes from "./Icon.module.css";
import arrowIcon from "../../../assests/Content.png";
import dotsIcon from "../../../assests/Contentt.png";

const Icon = () => {
  return (
    <div className={classes.arrow__link}>
      <img
        src={arrowIcon}
        className={classes.arrowIcon}
        height="20"
        width="25"
        alt="ArrowIcon"
      />
      <img
        src={dotsIcon}
        className={classes.dotsIcon}
        height="35"
        width="40"
        alt="DotsIcon"
      />
    </div>
  );
};

export default Icon;
