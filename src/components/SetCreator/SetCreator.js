import React, { useState, useEffect } from "react";

import Button from "../FormElements/Button";
import CardSelector from "./CardSelector";

const SetCreator = props => {
  const [rolesetState, setRolesetState] = useState([
    "alien",
    "alien",
    "alien",
    "alien",
    "alien",
    "alien"
  ]);

  const onAddCardHandler = event => {
    event.preventDefault();
    setRolesetState([...rolesetState, "alien"]);
    console.log(rolesetState);

  };

  const onCardChangedHandler = event => {
    const newRoleset = [...rolesetState];
    newRoleset[event.target.id] = event.target.value;
    setRolesetState(newRoleset);
    console.log(rolesetState);
  };

  const onRemoveCardHandler = index => {
    setRolesetState(rolesetState.splice(index));
    console.log(rolesetState);

  };

  return (
    <div className="Set-Creator">
      {rolesetState.map((c, index) => (
        <CardSelector
          key={index}
          index={index}
          selected={c}
          onChange={onCardChangedHandler}
          onRemove={onRemoveCardHandler}
        />
      ))}
      <Button onClick={onAddCardHandler}>&#43;</Button>
    </div>
  );
};

export default SetCreator;
