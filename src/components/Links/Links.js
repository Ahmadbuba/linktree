import React from "react";
import classes from "./Links.module.css";

const Links = (props) => {
  const linksSection = [
    {
      id: "btn__zuri",
      link: "https://training.zuri.team/",
      text: "Zuri Team",
      subtext: "",
    },
    {
      id: "books",
      link: "http://books.zuri.team",
      text: "Zuri Books",
      subtext: "Grab cool books for design and coding",
    },
    {
      id: "book__python",
      link: `https://books.zuri.team/python-for-beginners?ref_id=${props.slackUsername}`,
      text: "Python Book",
      subtext:
        "Kick Start your journey in the most popular programming language today",
    },
    {
      id: "pitch",
      link: "https://background.zuri.team",
      text: "Next-Gen Coders",
      subtext: "We train and mentor the next Gen of Coders!",
    },
    {
      id: "book__design",
      link: "https://books.zuri.team/design-rules",
      text: "Design Book",
      subtext: "Hurry to grab your free Design book offerd by Zuri",
    },
  ];
  return (
    <React.Fragment>
      <a
        className={classes.link__item}
        href={linksSection[0].link}
        target="_blank"
        rel="noopener noreferrer"
        id={linksSection[0].id}
      >
        <h1>{linksSection[0].text}</h1>
        <p>{linksSection[0].subtext}</p>
      </a>
      <a
        className={classes.link__item}
        href={linksSection[1].link}
        target="_blank"
        rel="noopener noreferrer"
        id={linksSection[1].id}
      >
        <h1>{linksSection[1].text}</h1>
        <p>{linksSection[1].subtext}</p>
      </a>
      <a
        className={classes.link__item}
        href={linksSection[2].link}
        target="_blank"
        rel="noopener noreferrer"
        id={linksSection[2].id}
      >
        <h1>{linksSection[2].text}</h1>
        <p>{linksSection[2].subtext}</p>
      </a>
      <a
        className={classes.link__item}
        href={linksSection[3].link}
        target="_blank"
        rel="noopener noreferrer"
        id={linksSection[3].id}
      >
        <h1>{linksSection[3].text}</h1>
        <p>{linksSection[3].subtext}</p>
      </a>
      <a
        className={classes.link__item}
        href={linksSection[4].link}
        target="_blank"
        rel="noopener noreferrer"
        id={linksSection[4].id}
      >
        <h1>{linksSection[4].text}</h1>
        <p>{linksSection[4].subtext}</p>
      </a>
    </React.Fragment>
  );
};

export default Links;
