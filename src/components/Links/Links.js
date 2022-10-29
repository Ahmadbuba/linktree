import React from "react";
import classes from "./Links.module.css";
import LinkCard from "../UI/LinkCard";

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
      {linksSection.map((linkSection) => (
        <LinkCard
          key={linkSection.id}
          link={linkSection.link}
          text={linkSection.text}
          subtext={linkSection.subtext}
        />
      ))}
    </React.Fragment>
  );
};

export default Links;
