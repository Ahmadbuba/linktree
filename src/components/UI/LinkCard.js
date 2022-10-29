import React from "react";
import classes from "./LinkCard.module.css";

/**
 *
 * link
 * text
 * subtext
 */

const LinkCard = (props) => {
  return (
    <a className={classes.link__item} href={props.link} target="_blank">
      <h1>{props.text}</h1>
      <p>{props.subtext}</p>
    </a>
  );
};

export default LinkCard;
