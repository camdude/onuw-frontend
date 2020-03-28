import React from "react";

const RoleCard = props => {
  return (
    <div className="RoleCard">
      {props.showImg ? (
        <img
          className="RoleCard__img"
          src={require(`../assets/role_cards/${props.card}.png`)}
          alt={props.card}
        />
      ) : (
      <p>{props.card}</p>
      )}
    </div>
  );
};

export default RoleCard;
