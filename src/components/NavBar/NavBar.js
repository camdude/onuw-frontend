import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

const NavBar = props => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__menu">
        <button className="menu" onClick={toggleSidebar}>
          <span className="menu__icon">&nbsp;</span>
        </button>
      </div>
      <Link to={props.home} className="navbar__logo">
        <img className="navbar__logo-image" src={props.logo} alt="Logo" />
      </Link>
      <Navigation>{props.children}</Navigation>
      <Sidebar open={sidebarOpen} clicked={toggleSidebar} logo={props.logo}>
        {props.children}
      </Sidebar>
    </div>
  );
};

export default NavBar;
