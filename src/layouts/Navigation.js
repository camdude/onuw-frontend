import React, {useContext} from "react";

import NavBar from "../components/NavBar/NavBar";
import NavItem from "../components/NavBar/NavItem";
import Icon from "../assets/icons/logo.png";
import NotificationBar from "../components/UIElements/NotificationBar";
import { AuthContext } from "../context/auth-context";

const Navigation = props => {
  const auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <NavBar home="/" logo={Icon}>
        <NavItem link="/" exact>
          Home
        </NavItem>
        <NavItem link="/roleset/all">Role Sets</NavItem>
        {auth.isLoggedIn && <NavItem link="/collection">Collection</NavItem>}
        
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
