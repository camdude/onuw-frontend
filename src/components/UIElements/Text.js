import React from "react";
import { Link } from "react-router-dom";

const Text = props => {
  switch (props.element) {
    case "h1":
      return (
        <h1 className={`heading-primary ${props.center && "u-center-text"}`}>
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`heading-secondary ${props.center && "u-center-text"}`}>
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`heading-tertiary ${props.center && "u-center-text"}`}>
          {props.children}
        </h3>
      );

    case "a":
      return (
        <a
          className={`link ${props.center && "u-center-text"}`}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    case "link":
      return (
        <Link
          className={`link ${props.center && "u-center-text"}`}
          to={props.to}
        >
          {props.children}
        </Link>
      );
    default:
      return (
        <p className={`paragraph ${props.center && "u-center-text"}`}>
          {props.children}
        </p>
      );
  }
};

export default Text;
