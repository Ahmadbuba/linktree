import React from "react";
import classes from "./Links.module.css";
import LinkCard from "../UI/LinkCard";

const Links = () => {
  const slackDisplayname = "Ahmad";

  const linksSection = [
    {
      id: "btn__zuri",
      link: "https://training.zuri.team/",
      text: "Zuri Team",
      subtext: "Just a description",
    },
    {
      id: "books",
      link: "http://books.zuri.team",
      text: "Zuri Books",
      subtext: "Just a description",
    },
    {
      id: "book__python",
      link: `https://books.zuri.team/python-for-beginners?ref_id=${slackDisplayname}`,
      text: "Python Books",
      subtext: "Just a description",
    },
    {
      id: "pitch",
      link: "https://background.zuri.team",
      text: "Background Check For Coders",
      subtext: "Just a description",
    },
    {
      id: "book__design",
      link: "https://books.zuri.team/design-rules",
      text: "Design Books",
      subtext: "Just a description",
    },
  ];
  return (
    <React.Fragment>
      {linksSection.map((linkSection) => (
        <LinkCard
          key={linkSection.id}
          link={linkSection.link}
          text={linkSection.text}
          subtext={linkSection.subtext}
          className={classes.center__alignment}
        />
      ))}
    </React.Fragment>
  );
};

export default Links;
