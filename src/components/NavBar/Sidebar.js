import React from "react";

const sidebar = props => {
  let navClasses = "sidebar__nav--close";
  if (props.open) {
    navClasses = "sidebar__nav--open";
  }

  return (
    <div className="sidebar">
      <nav className={navClasses}>
        <div className="sidebar__logo">
          <img className="sidebar__logo-image" src={props.logo} alt="Logo" />
        </div>
        <div className="sidebar__title">TWBC</div>
        <ul className="sidebar__list" onClick={props.clicked}>
          {props.children}
        </ul>
      </nav>
      {props.open ? (
        <div className="sidebar__background" onClick={props.clicked} />
      ) : null}
    </div>
  );
};

export default sidebar;
