import classes from "./Footer.module.css";
import logoIcon from "../../../../src/assests/I4G.png";

const Footer = () => {
  return (
    <div className={classes.footer__div}>
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
    </div>
  );
};

export default Footer;
