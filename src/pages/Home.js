import React from "react";
import ProfileIcons from "./components/Footer/ProfileIcons";
import Links from "./components/Links";
import Profile from "./components/Profile/Profile";

const Home = () => {
  return (
    <React.Fragment>
      <Profile />
      <Links />
      <ProfileIcons />
    </React.Fragment>
  );
};

export default Home;
