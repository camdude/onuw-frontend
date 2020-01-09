import React from "react";

const RoleCard = props => {
  return (
    <div className="RoleCard">
      <img
        className="RoleCard__img"
        src={require(`../assets/role_cards/${props.card}.png`)}
        alt={props.card}
      />
    </div>
  );
};

export default RoleCard;
