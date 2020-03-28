import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/auth-context";

const UserProfile = props => {
  const auth = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const onLogout = () => {
    auth.logout();
    setDropdownOpen(false);
  };

  let dropdown;
  if (dropdownOpen) {
    dropdown = (
      <ul className="dropdown">
        <li className="dropdown__listItem">
          <Link className="dropdown__item" to="/users/profile">
            Your Profile
          </Link>
        </li>
        <li className="dropdown__listItem">
          <div className="dropdown__item" onClick={onLogout}>
            Logout
          </div>
        </li>
      </ul>
    );
  }

  return (
    <div className="userProfile">
      <div className="userProfile__body">
        {auth.isLoggedIn ? (
          <div className="userProfile__profile">
            <i className="icon fa fa-user-circle" />
            <div className="userProfile__name">{auth.userData.username}</div>
            <div className="userProfile__dropdown" onClick={openDropdown}>
              <i className="icon fa fa-caret-down" />
            </div>
          </div>
        ) : (
          <Link className="userProfile__login" to="/users/login">
            Login
          </Link>
        )}
      </div>
      {dropdown}
    </div>
  );
};

export default UserProfile;
