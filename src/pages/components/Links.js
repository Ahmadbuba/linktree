import React from "react";
import LinkCard from "../UI/LinkCard";

const Links = (props) => {
  const slackUsername = "ahmadBuba";
  const defaultAnchor = "normal";
  const routeAnchor = "route";

  const linksSection = [
    {
      id: "btn__zuri",
      link: "https://training.zuri.team/",
      text: "Zuri Team",
      subtext: "",
      type: defaultAnchor,
    },
    {
      id: "books",
      link: "http://books.zuri.team",
      text: "Zuri Books",
      subtext: "Grab cool books for design and coding",
      type: defaultAnchor,
    },
    {
      id: "book__python",
      link: `https://books.zuri.team/python-for-beginners?ref_id=${slackUsername}`,
      text: "Python Book",
      subtext:
        "Kick Start your journey in the most popular programming language today",
      type: defaultAnchor,
    },
    {
      id: "pitch",
      link: "https://background.zuri.team",
      text: "Next-Gen Coders",
      subtext: "We train and mentor the next Gen of Coders!",
      type: defaultAnchor,
    },
    {
      id: "book__design",
      link: "https://books.zuri.team/design-rules",
      text: "Design Book",
      subtext: "Hurry to grab your free Design book offerd by Zuri",
      type: defaultAnchor,
    },
    {
      id: "contact",
      link: "/contact",
      text: "Contact Me",
      subtext: "",
      type: routeAnchor,
    },
  ];
  const twitter = "https://twitter.com/emirbuba_2";

  // const myLinks

  return (
    <React.Fragment>
      <LinkCard key="1" id="1" link={twitter} text="Ahmad Buba" />
      {linksSection.map((linkItem) => {
        return (
          <LinkCard
            key={linkItem.id}
            id={linkItem.id}
            link={linkItem.link}
            text={linkItem.text}
            subtext={linkItem.subtext}
            type={linkItem.type}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Links;
