import React from "react";

import NavBar from "../components/NavBar/NavBar";
import NavItem from "../components/NavBar/NavItem";
import Icon from "../assets/icon.jpg";

const Navigation = () => {
  return (
    <NavBar home="/" logo={Icon}>
      <NavItem link="/" exact>Home</NavItem>
      <NavItem link="/roleset/all">Role Sets</NavItem>
      <NavItem link="/users/login">Login</NavItem>
    </NavBar>
  );
};

export default Navigation;
