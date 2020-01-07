import React from "react";

import Text from "./UIElements/Text";

const RoleSetCard = props => {
  return (
    <div className="RoleSetCard">
      <div className="RoleSetCard__title">
        <Text element="h3">{props.title}</Text>
      </div>
      <div className="RoleSetCard__stats">
        <div className="RoleSetCard__statElement">
          <Text>Players: {props.players}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text>Complexity: {props.complexity || '~'}</Text>
        </div>
        <div className="RoleSetCard__statElement">
          <Text>Rating: {props.rating || '~'}</Text>
        </div>
      </div>
    </div>
  );
};

export default RoleSetCard;
