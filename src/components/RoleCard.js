import React from "react";

const RoleCard = props => {
  return (
    <div className="RoleCard">
      {props.showImg ? (
        <img
          className="RoleCard__img"
          src={require(`../assets/role_cards/${props.card.name}.png`)}
          alt={props.card.name}
        />
      ) : (
        <div className="RoleCard__cardBack">
          <p className="RoleCard__text">{props.card.name.replace("_", " ")}</p>
      <div className="RoleCard__expansion">{props.card.expansion}</div>
        </div>
      )}
    </div>
  );
};

export default RoleCard;
