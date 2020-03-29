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
        <div className="RoleCard__cardBack">
          <p className="RoleCard__text">{props.card}</p>
        </div>
      )}
    </div>
  );
};

export default RoleCard;
