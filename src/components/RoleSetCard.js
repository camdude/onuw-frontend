import React from "react";
import { Link } from "react-router-dom";

import Text from "./UIElements/Text";

const RoleSetCard = props => {
  return (
    <div className="RoleSetCard">
      <Link className="heading-tertiary RoleSetCard__title" to={`/roleset/${props.id}`}>
        {props.title}
      </Link>
      <div className="RoleSetCard__stats">
        <div className="RoleSetCard__statElement">
          <Text>Players: {props.players}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text>Complexity: {props.complexity || "~"}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text>Rating: {props.rating || "~"}</Text>
        </div>
      </div>
    </div>
  );
};

export default RoleSetCard;
