import { Link } from "react-router-dom";
import classes from "./LinkCard.module.css";

const LinkCard = (props) => {
  let anchorType = (
    <a
      className={classes.link__item}
      href={props.link}
      target="_blank"
      id={props.id}
      rel="noopener noreferrer"
    >
      <h1>{props.text}</h1>
      <p>{props.subtext}</p>
    </a>
  );

  if (props.type) {
    anchorType = (
      <Link className={classes.link__item} to={props.link} id={props.id}>
        <h1>{props.text}</h1>
        <p>{props.subtext}</p>
      </Link>
    );
  }

  return anchorType;
};

export default LinkCard;
