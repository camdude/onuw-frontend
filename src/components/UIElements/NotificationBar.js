import React from "react";
import { createPortal } from "react-dom";

const NotificationBar = props => {
  const bar = (
    <div className={`notificationBar ${"notificationBar--" + (props.type) }`}>
      <div className="notificationBar__message">{props.children}</div>
      <div className="notificationBar__action" onClick={props.onClose}>
        <i className="fa fa-times-circle" />
      </div>
    </div>
  ) ;

  return createPortal(bar, document.getElementById("notification-hook"));
};

export default NotificationBar;
