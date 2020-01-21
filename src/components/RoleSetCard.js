import React from "react";
import { Link } from "react-router-dom";

import Text from "./UIElements/Text";

const RoleSetCard = props => {
  return (
    <div className="RoleSetCard">
      <Link
        className="heading-tertiary RoleSetCard__title"
        to={`/roleset/${props.data.id}`}
      >
        {props.data.title}
      </Link>
      <div className="RoleSetCard__stats">
        <div className="RoleSetCard__statElement">
          <Text><span className="u-bold-text">Author: </span>{props.data.username}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text><span className="u-bold-text">Players: </span>{props.data.players}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text><span className="u-bold-text">Complexity: </span>{props.data.complexity || "~"}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text><span className="u-bold-text">Rating: </span>{props.data.rating || "~"}</Text>
        </div>
      </div>
    </div>
  );
};

export default RoleSetCard;
