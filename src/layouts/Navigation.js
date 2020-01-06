import React from "react";

import NavBar from "../components/NavBar/NavBar";
import NavItem from "../components/NavBar/NavItem";

const Navigation = () => {
  return (
    <NavBar home="/">
      <NavItem link="/">Home</NavItem>
      <NavItem link="/rolesets">Role Sets</NavItem>
      <NavItem link="/collections">My Collection</NavItem>
      <NavItem link="/profile">Profile</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </NavBar>
  );
};

export default Navigation;
