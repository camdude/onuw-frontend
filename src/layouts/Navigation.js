import React from "react";

import NavBar from "../components/NavBar/NavBar";
import NavItem from "../components/NavBar/NavItem";
import Icon from "../assets/icon.jpg";
import NotificationBar from "../components/UIElements/NotificationBar";

const Navigation = props => {
  return (
    <React.Fragment>
      <NavBar home="/" logo={Icon}>
        <NavItem link="/" exact>
          Home
        </NavItem>
        <NavItem link="/roleset/all">Role Sets</NavItem>
      </NavBar>
      {props.notifMsg && (
        <NotificationBar type="danger" onClose={props.closeNotif}>
          {props.notifMsg}
        </NotificationBar>
      )}
    </React.Fragment>
  );
};

export default Navigation;
