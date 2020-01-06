import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button ${props.inverse && "button--inverse"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        className={`button ${props.inverse && "button--inverse"}`}
        to={props.to}
        exact={props.exact}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button ${props.inverse && "button--inverse"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
