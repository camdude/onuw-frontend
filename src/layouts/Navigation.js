import React from "react";

import NavBar from "../components/NavBar/NavBar";
import NavItem from "../components/NavBar/NavItem";
import Icon from "../assets/icon.jpg";

const Navigation = () => {
  return (
    <NavBar home="/" logo={Icon}>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/rolesets">Role Sets</NavItem>
      <NavItem link="/collections">My Collection</NavItem>
      <NavItem link="/profile">Profile</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </NavBar>
  );
};

export default Navigation;
